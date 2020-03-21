<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Shaders
    import fragmentShader from '~/assets/pages/page-1/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/page-1/shaders/vertexShader.glsl';

    // Sketch
    import * as THREE from 'three';

    // Canvas sketch
    const settings = {
        // Make the loop animated
        animate: true,
        // Get a WebGL canvas rather than 2D
        context: 'webgl',
        // Loop time in seconds
        duration: 5,
        // Loop framerate
        fps: 36,
        // Visualize the above FPS in-browser
        playbackRate: 'throttle',
        // Turn on antialias
        attributes: {
            antialias: true,
        },
    };

    // Page
    export default {
        name: 'page-1',
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
            // Sketch
            sketch(
                { context }
            ) {

                // Create a renderer
                const renderer = new THREE.WebGLRenderer(
                    {
                        context,
                    }
                );

                // WebGL background color
                renderer.setClearColor(
                    '#000',
                    1
                );

                // Setup a camera
                const camera = new THREE.PerspectiveCamera(
                    45,
                    1,
                    0.01,
                    100
                );

                camera.position.set(
                    0,
                    0,
                    - 4.5
                );

                camera.lookAt(
                    new THREE.Vector3()
                );

                // Setup your scene
                const scene = new THREE.Scene()
                      , mesh = new THREE.Mesh(
                          new THREE.SphereGeometry(
                              1,
                              64,
                              64
                          ),
                          new THREE.ShaderMaterial(
                              {
                                  extensions: {
                                      derivatives: '#extension GL_OES_standard_derivatives : enable',
                                  },
                                  fragmentShader,
                                  vertexShader,
                                  uniforms: {
                                      playhead: {
                                          value: 0,
                                      },
                                  },
                              }
                          )
                      )
                ;

                scene.add(
                    mesh
                );

                // draw each frame
                return {
                    // Handle resize events here
                    resize(
                        {
                            pixelRatio,
                            viewportWidth,
                            viewportHeight,
                        }
                    ) {

                        renderer.setPixelRatio(
                            pixelRatio
                        );

                        renderer.setSize(
                            viewportWidth,
                            viewportHeight
                        );

                        camera.aspect = viewportWidth / viewportHeight;
                        camera.updateProjectionMatrix();

                    },
                    // Update & render your scene here
                    render(
                        { playhead }
                    ) {

                        mesh.material.uniforms.playhead.value = playhead;

                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Dispose of events & renderer for cleaner hot-reloading
                    unload() {

                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
