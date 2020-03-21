<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Shaders
    import fragmentShader from '~/assets/pages/page-3/shaders/fragmentShader.glsl';

    // Canvas Sketch Utils
    import createShader from 'canvas-sketch-util/shader';

    // Canvas sketch
    const settings = {
        context: 'webgl',
        animate: true,
    };

    // Page
    export default {
        name: 'page-3',
        data: () => (
            {
                drawManager: null,
            }
        ),
        mounted() {

            this.$nextTick(
                async() => {

                    // Suggested way
                    try {

                        this.drawManager = await this.$sketch(
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

            this.drawManager && this.drawManager.unload();

        },
        methods: {
            sketch: (
                { gl }
            ) => createShader(
                {
                    // Pass along WebGL context
                    gl,
                    // Specify fragment and/or vertex shader strings
                    frag: fragmentShader,
                    // Specify additional uniforms to pass down to the shaders
                    uniforms: {
                        // Expose props from canvas-sketch
                        time: (
                            { time }
                        ) => time,
                    },
                }
            ),
        },
    };
</script>
