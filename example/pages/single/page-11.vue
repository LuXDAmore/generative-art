<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/page-11/shaders/fragmentShader.frag';
    import vertexShader from '~/assets/pages/page-11/shaders/vertexShader.vert';

    // Page
    export default {
        name: 'page-11',
        data: () => (
            {
                sketchManager: null,
            }
        ),
        async mounted() {

            // Suggested way
            try {

                this.sketchManager = await this.$sketch(
                    // Settings of the sketch
                    {
                        animate: true,
                        context: 'webgl',
                        attributes: {
                            antialias: true,
                        },
                        canvas: this.$refs.canvas,
                    },
                    // Method for the rendering
                    this.sketch,
                );

            } catch( e ) {

                console.error(
                    e
                );

            }

        },
        beforeDestroy() {

            this.sketchManager && this.sketchManager.unload();

        },
        methods: {
            sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                    pixelRatio,
                }
            ) {

                // Renderer
                const renderer = new THREE.WebGLRenderer(
                    {
                        context,
                        antialias: true,
                    }
                );

                renderer.setPixelRatio(
                    pixelRatio > 3 ? 3 : pixelRatio
                );

                renderer.setSize(
                    width,
                    height
                );

                renderer.setClearColor(
                    new THREE.Color(
                        '#ff992c'
                    ),
                    1
                );

                renderer.physicallyCorrectLights = true;
                renderer.outputEncoding = THREE.sRGBEncoding;

                // Camera
                const camera = new THREE.PerspectiveCamera(
                    50,
                    0.1,
                    20000,
                    20000
                );

                camera.position.set(
                    0,
                    0,
                    54
                );

                camera.lookAt(
                    new THREE.Vector3(
                        1.0,
                        1.0,
                        1.0
                    )
                );

                // Mouse
                const mouse = new THREE.Vector2(
                          Math.random(),
                          Math.random()
                      )
                      , onMouseMove = event => {

                          // calculate mouse position in normalized device coordinates
                          mouse.x = event.clientX / window.innerWidth;
                          mouse.y = 1.0 - event.clientY / window.innerHeight;

                      }
                      // Scene
                      , scene = new THREE.Scene()
                      , geometry = new THREE.PlaneBufferGeometry(
                          2,
                          2,
                          1,
                          1
                      )
                      , material = new THREE.ShaderMaterial(
                          {
                              vertexShader,
                              fragmentShader,
                              extensions: {
                                  derivatives: '#extension GL_OES_standard_derivatives : enable',
                              },
                              side: THREE.DoubleSide,
                              uniforms: {
                                  uTime: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  uHue: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  uHueVariation: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  uDensity: {
                                      type: 'f',
                                      value: 1,
                                  },
                                  uDisplacement: {
                                      type: 'f',
                                      value: 0.45,
                                  },
                                  uMousePosition: {
                                      type: 'v2',
                                      value: mouse,
                                  },
                              },
                          }
                      )
                      , plane = new THREE.Mesh(
                          geometry,
                          material
                      )
                ;

                scene.add(
                    plane
                );

                // Mouse
                canvas.addEventListener(
                    'mousemove',
                    onMouseMove,
                    false
                );

                // Render
                return {
                    render(
                        { time }
                    ) {

                        // Uniforms for Shaders
                        material.uniforms.uTime.value = time / 3.6;

                        // Mouse
                        material.uniforms.uMousePosition.value = mouse;

                        // Render
                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Events
                    resize(
                        {
                            viewportWidth,
                            viewportHeight,
                        }
                    ) {

                        renderer.setSize(
                            viewportWidth,
                            viewportHeight,
                            false
                        );

                        camera.aspect = viewportWidth / viewportHeight;

                        camera.updateProjectionMatrix();

                    },
                    unload() {

                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
