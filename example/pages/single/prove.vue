<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/prove/shaders/fragmentShader.frag';
    import vertexShader from '~/assets/pages/prove/shaders/vertexShader.vert';

    // ThreeJs Camera Controller
    const orbitControlsImporter = () => import(
        'three/examples/jsm/controls/OrbitControls'
    ).then(
        m => m.default || m
    );

    export default {
        name: 'prove',
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
                        duration: 6.279582609797744,
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
            async sketch(
                { context }
            ) {

                // Renderer
                const renderer = new THREE.WebGLRenderer(
                    {
                        context,
                    }
                );

                renderer.setClearColor(
                    new THREE.Color(
                        '#333'
                    ),
                    1
                );

                renderer.physicallyCorrectLights = true;
                renderer.outputEncoding = THREE.sRGBEncoding;

                // Camera
                const camera = new THREE.PerspectiveCamera(
                    45,
                    1,
                    0.01,
                    100
                );

                camera.position.set(
                    0,
                    0,
                    4,
                );

                camera.lookAt(
                    new THREE.Vector3(
                        1.0,
                        1.0,
                        1.0
                    )
                );

                // Controls
                const { OrbitControls } = await orbitControlsImporter()
                      , controls = new OrbitControls(
                          camera,
                          context.canvas
                      )
                      // Scene
                      , scene = new THREE.Scene()
                      , geometry = new THREE.PlaneBufferGeometry(
                          1,
                          1,
                          1,
                          1,
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
                                  time: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  playhead: {
                                      type: 'f',
                                      value: 0,
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

                // Render
                return {
                    render(
                        {
                            time,
                            playhead,
                        }
                    ) {

                        // Animation
                        plane.rotation.y = playhead * 2 * Math.PI;

                        // Uniforms for Shaders
                        material.uniforms.time.value = time;
                        material.uniforms.playhead.value = playhead;

                        // Threejs
                        controls.update();

                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Events
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
                            viewportHeight,
                            false
                        );

                        camera.aspect = viewportWidth / viewportHeight;

                        camera.updateProjectionMatrix();

                    },
                    unload() {

                        controls.dispose();
                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
