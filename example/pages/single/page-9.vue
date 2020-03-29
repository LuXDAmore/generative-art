<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Load assets
    import load from 'load-asset';

    // Shaders
    import fragmentShader from '~/assets/pages/page-9/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/page-9/shaders/vertexShader.glsl';

    // Sketch
    import * as THREE from 'three';

    // Three Utils
    const orbitControlsImporter = () => import(
                'three/examples/jsm/controls/OrbitControls'
            )
            .then(
                m => m.default || m
            )
          // Canvas sketch
          , settings = {
              // Make the loop animated
              animate: true,
              // Get a WebGL canvas rather than 2D
              context: 'webgl',
              // Turn on MSAA
              attributes: {
                  antialias: true,
              },
          };

    // Page
    export default {
        name: 'page-9',
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
            async sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                    update,
                }
            ) {

                const { OrbitControls } = await orbitControlsImporter()
                      , imageUrlLuna = `${ process.env.base }luna.jpg`
                      , image = await load(
                          imageUrlLuna
                      )
                      , {
                          width: imageWidth,
                          height: imageHeight,
                      } = image
                      , aspectRatio = imageWidth / imageHeight
                ;

                // Update our sketch with new settings
                update(
                    {
                        dimensions: [
                            imageWidth,
                            imageHeight,
                        ],
                    }
                );

                // Create a renderer
                const renderer = new THREE.WebGLRenderer(
                          {
                              context,
                          }
                      )
                      , camera = new THREE.PerspectiveCamera(
                          45,
                          width / height,
                          0.001,
                          1000
                      )
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                      , geometry = new THREE.PlaneBufferGeometry(
                          aspectRatio,
                          1,
                          45,
                          45,
                      )
                      // Materials
                      , material = new THREE.ShaderMaterial(
                          {
                              //   wireframe: true,
                              // transparent: true,
                              vertexShader,
                              fragmentShader,
                              extensions: {
                                  derivatives: '#extension GL_OES_standard_derivatives : enable',
                              },
                              side: THREE.DoubleSide,
                              uniforms: {
                                  image: {
                                      type: 't',
                                      value: new THREE.TextureLoader().load(
                                          imageUrlLuna
                                      ),
                                  },
                                  time: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  resolution: {
                                      type: 'v2',
                                      value: new THREE.Vector2(
                                          width,
                                          height,
                                      ),
                                  },
                                  uvRate1: {
                                      value: new THREE.Vector2(
                                          1,
                                          1
                                      ),
                                  },
                              },
                          }
                      )
                      , plane = new THREE.Mesh(
                          geometry,
                          material
                      )
                      // Scene
                      , scene = new THREE.Scene()
                ;

                camera.position.set(
                    0.3,
                    0,
                    - 1.5
                );

                scene.add(
                    plane
                );

                // Render our sketch
                return {
                    // Handle resize events here
                    resize(
                        {
                            pixelRatio,
                            viewportWidth,
                            viewportHeight,
                        }
                    ) {

                        update(
                            {
                                dimensions: [
                                    viewportWidth,
                                    viewportHeight,
                                ],
                            }
                        );

                        renderer.setPixelRatio(
                            pixelRatio
                        );
                        renderer.setSize(
                            viewportWidth,
                            viewportHeight
                        );

                        material.uniforms.resolution.value.x = viewportWidth;
                        material.uniforms.resolution.value.y = viewportHeight;

                        camera.aspect = viewportWidth / viewportHeight;

                        camera.updateProjectionMatrix();

                    },
                    // And render events here
                    render(
                        { time }
                    ) {

                        // Timing
                        material.uniforms.time.value = time;

                        // Controls
                        controls.update();

                        // Render
                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Dispose of WebGL context (optional)
                    unload() {

                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
