<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Canvas sketch
    const settings = {
        // 300 PPI for print resolution
        pixelsPerInch: 300,
        // All our dimensions and rendering units will use inches
        units: 'in',
        // 3.5x2 inches
        dimensions: [
            3.5,
            2,
        ],
        // Include 1/8 inch 'bleed' to the dimensions above
        bleed: 1 / 8,
    };

    // Page
    export default {
        name: 'page-2',
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
            sketch: () => properties => {

                const {
                    context,
                    exporting,
                    bleed,
                    width,
                    height,
                    trimWidth,
                    trimHeight,
                } = properties;

                // Clear canvas and fill with a color
                // All units are inches including 'width' and 'height'
                context.clearRect(
                    0,
                    0,
                    width,
                    height
                );
                context.fillStyle = '#eff3f4';
                context.fillRect(
                    0,
                    0,
                    width,
                    height
                );

                // Visualize the trim area with a yellow guide
                // This is ignored on export
                if( ! exporting && bleed > 0 ) {

                    context.strokeStyle = 'hsl(0, 80%, 80%)';
                    context.lineWidth = 0.0075;
                    context.strokeRect(
                        bleed,
                        bleed,
                        trimWidth,
                        trimHeight
                    );

                }

                // Use a foreground color for the points
                const color = '#2b82b5';

                context.fillStyle = color;

                // Make circles expand to edge of smallest trim (card) edge,
                // but with a 1/4" padding.
                const maxRadius = ( Math.min(
                          trimWidth,
                          trimHeight
                      ) / 2 ) - ( 1 / 4 )

                      // Draw points
                      , points = 200;

                for( let index = 1; index <= points; index ++ ) {

                    const t = index / points
                          // Here phi is the golden ratio
                          , phi = ( Math.sqrt(
                              5
                          ) + 1 ) / 2
                          // Pick our angle based on the golden ratio
                          , theta = 2 * Math.PI * index * phi
                          // Get back a distance 0..1 based on current step
                          , distance = Math.sqrt(
                              t
                          )
                          // Find the cartesian point on a unit circle
                          , x = Math.cos(
                              theta
                          )
                          , y = Math.sin(
                              theta
                          )
                          // Scale this point to our max dimensions
                          , r = distance * maxRadius
                          // Find the point on the paper in inches
                          , cx = width / 2 + x * r
                          , cy = height / 2 + y * r
                          // Now draw a circle at each point
                          // Make them smaller when closer to centre
                          , radius = 0.02 * Math.pow(
                              t,
                              0.5
                          );

                    context.beginPath();
                    context.arc(
                        cx,
                        cy,
                        radius,
                        0,
                        Math.PI * 2,
                        false
                    );
                    context.fill();

                }

            },
        },
    };
</script>
