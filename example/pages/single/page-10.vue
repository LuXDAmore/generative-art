<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/page-10/shaders/fragmentShader.frag';
    import vertexShader from '~/assets/pages/page-10/shaders/vertexParticles.vert';

    // ThreeJs Camera Controller
    const orbitControlsImporter = () => import(
        'three/examples/jsm/controls/OrbitControls'
    ).then(
        m => m.default || m
    );

    export default {
        name: 'page-10',
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
                        duration: 6,
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
                    1,
                );

                camera.lookAt(
                    new THREE.Vector3()
                );

                // Controls
                const { OrbitControls } = await orbitControlsImporter()
                      , controls = new OrbitControls(
                          camera,
                          context.canvas
                      )
                      // Geometry and Material
                      , geometry = new THREE.BoxBufferGeometry(
                          1,
                          1,
                          1,
                          45,
                          45,
                          45
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
                                  playhead: {
                                      type: 'f',
                                      value: 0,
                                  },
                              },
                          }
                      )
                      , plane = new THREE.Points(
                          geometry,
                          material
                      )
                      // Scene
                      , scene = new THREE.Scene()
                ;

                scene.add(
                    plane
                );

                // Render
                return {
                    render(
                        { playhead }
                    ) {

                        // Uniforms for Shaders
                        material.uniforms.playhead.value = playhead;

                        // Camera
                        controls.update();

                        // Render
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
                        );

                        camera.aspect = viewportWidth / viewportHeight;

                        camera.updateProjectionMatrix();

                    },
                    unload() {

                        // Dispose
                        controls.dispose();
                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
