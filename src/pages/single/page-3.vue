<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Sketch
    import createShader from 'canvas-sketch-util/shader';

    // Shaders
    import fragmentShader from '~/assets/pages/page-3/shaders/fragmentShader.glsl';

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
