<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Canvas sketch
    const settings = {
        exportPixelRatio: 2,
    };

    // Page
    export default {
        name: 'generative-art-1',
        data: () => (
            {
                sketchManager: null,
            }
        ),
        mounted() {

            this.$nextTick(
                async() => {

                    // Suggested way
                    try {

                        this.sketchManager = await this.$sketch(
                            {
                                ... settings,
                                canvas: this.$refs.canvas,
                            },
                            this.sketch,
                        );

                    } catch( error ) {

                        console.error(
                            error
                        );

                    }

                },
            );

        },
        beforeDestroy() {

            this.sketchManager && this.sketchManager.unload();

        },
        methods: {
            sketch(
                {
                    canvas,
                    render,
                }
            ) {

                function reRender() {

                    render();

                }

                //   Events
                canvas.addEventListener(
                    'click',
                    reRender,
                    false
                );

                // Utility function, random number between [min..max] range
                const random = ( min, max ) => Math.random() * ( max - min ) + min

                      // Generate a whole bunch of circles/arcs
                      , length = 1000
                      , circles = Array.from(
                          {
                              length,
                          }
                      )
                          .fill()
                          .map(
                              () => {

                                  const arcStart = Math.PI * 2 - random(
                                            0,
                                            Math.PI * 2 / 3
                                        )
                                        , arcLength = random(
                                            - 0.1,
                                            0.3
                                        ) * Math.PI * 2
                                        , segmentCount = Math.floor(
                                            random(
                                                5,
                                                200
                                            )
                                        )
                                        , spread = 0.085;

                                  return {
                                      segments: Array.from(
                                          {
                                              length: segmentCount,
                                          }
                                      )
                                          .fill()
                                          .map(
                                              () => random(
                                                  0,
                                                  1
                                              )
                                          ),
                                      arcStart,
                                      arcEnd: arcStart + arcLength,
                                      arcLength,
                                      thickness: random(
                                          0.01,
                                          1
                                      ),
                                      alpha: random(
                                          0.25,
                                          0.5
                                      ),
                                      radius: random(
                                          0.1,
                                          0.75
                                      ),
                                      x: 0.5 + random(
                                          - 1,
                                          1
                                      ) * spread,
                                      y: 0.5 + random(
                                          - 1,
                                          1
                                      ) * spread,
                                  };

                              }
                          );

                return {
                    render(
                        {
                            context,
                            width,
                            height,
                        }
                    ) {

                        // Fill browser with solid color
                        context.globalCompositeOperation = 'source-over';
                        context.fillStyle = 'black';
                        context.globalAlpha = 1;
                        context.fillRect(
                            0,
                            0,
                            width,
                            height
                        );

                        const side = Math.min(
                                  width,
                                  height
                              )
                              , globalThickness = random(
                                  1,
                                  1.5
                              )
                        ;

                        // Now draw each arc
                        context.strokeStyle = 'white';
                        context.fillStyle = 'white';
                        circles.forEach(
                            circle => {

                                context.beginPath();
                                context.globalCompositeOperation = 'lighter';
                                // Instead of just drawing an arc, we will draw little dots along
                                // the arc, somewhat randomly jittered around
                                circle.segments.forEach(
                                    t => {

                                        const angle = circle.arcStart + circle.arcLength * t
                                              , radius = circle.radius * side + random(
                                                  - 1,
                                                  1
                                              ) * 0.5
                                              , x = circle.x * width + Math.cos(
                                                  angle
                                              ) * radius
                                              , y = circle.y * height + Math.sin(
                                                  angle
                                              ) * radius;

                                        context.beginPath();
                                        context.arc(
                                            x,
                                            y,
                                            circle.thickness
                                                * random(
                                                    0.1,
                                                    2
                                                )
                                                * globalThickness,
                                            0,
                                            Math.PI * 2 * random(
                                                0,
                                                1
                                            ),
                                            false
                                        );
                                        context.fill();
                                        context.globalAlpha = circle.alpha;

                                    }
                                );

                            }
                        );

                    },
                    // Dispose of events & renderer for cleaner hot-reloading
                    unload() {

                        canvas.removeEventListener(
                            'click',
                            reRender,
                            false
                        );

                    },
                };

            },
        },
    };
</script>
