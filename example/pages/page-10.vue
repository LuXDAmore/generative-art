<template>
    <main class="container canvas-container">

        <h6 class="absolute text--center text--red no-pointer-event">
            <small>TODO</small>
        </h6>

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Utils
    import random from 'canvas-sketch-util/random';
    import palettes from 'nice-color-palettes';

    // Canvas sketch
    const settings = {
        scaleToView: true,
        dimensions: [
            2048,
            2048,
        ],
    };

    // Page
    export default {
        name: 'page-10',
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

                    } catch( e ) {

                        console.error(
                            e
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
                    context,
                    width,
                    height,
                }
            ) {

                const colors = random.shuffle(
                          random.pick(
                              palettes
                          )
                      )
                      , angles = [
                          0,
                          0.5,
                          1,
                          1.5,
                      ]
                      , grid = [
                          4,
                          10,
                      ]
                      , mainColor = colors.shift()
                      , count = random.rangeFloor(
                          ... grid
                      )
                ;

                context.clearRect(
                    0,
                    0,
                    width,
                    height
                );

                context.fillStyle = mainColor;

                context.fillRect(
                    0,
                    0,
                    width,
                    height
                );

                class Circle {

                    constructor(
                        x = 100,
                        y = 100,
                        radius = 100,
                        startAngle = Math.PI * random.pick(
                            angles
                        ),
                        endAngle = startAngle + Math.PI * 1.5,
                        color = random.pick(
                            colors
                        ),
                    ) {

                        this.x = x;
                        this.y = y;
                        this.radius = radius;

                        this.startAngle = startAngle;
                        this.endAngle = endAngle;
                        this.color = color;

                    }

                    draw(
                        context,
                        moveX,
                        moveY
                    ) {

                        context.save();

                        context.strokeStyle = this.color;
                        context.fillStyle = this.color;

                        context.beginPath();

                        context.moveTo(
                            moveX,
                            moveY,
                        );

                        context.arc(
                            this.x,
                            this.y,
                            this.radius,
                            this.startAngle,
                            this.endAngle,
                        );

                        context.fill();

                        context.restore();

                    }
                }

                const radius = 300
                      , circles = []
                ;

                for( let index = 0; index < count; index ++ ) {

                    const xy = radius * index
                          , circle = new Circle(
                              xy,
                              xy,
                              radius
                          )
                    ;

                    circle.draw(
                        context,
                        radius * 2,
                    );

                    circles.push(
                        circle
                    );

                }

                console.info(
                    circles
                );

                return () => {};

            },
        },
    };
</script>
