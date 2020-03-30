<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // Load assets
    import load from 'load-asset';

    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/page-6/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/page-6/shaders/vertexShader.glsl';

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
        name: 'page-6',
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
                    update,
                }
            ) {

                const { OrbitControls } = await orbitControlsImporter()
                      , dat = require(
                          'dat.gui'
                      )
                ;

                const imageUrlLuna = `${ process.env.base }luna.jpg`
                      , imageUrlLuna2 = `${ process.env.base }luna-2.jpg`
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

                // Mouse
                let isIntersectedByMouse = false;

                // Create a renderer
                const renderer = new THREE.WebGLRenderer(
                          {
                              context,
                          }
                      )
                      , raycaster = new THREE.Raycaster()
                      , mouse = new THREE.Vector3()
                      , onMouseMove = event => {

                          // calculate mouse position in normalized device coordinates
                          // (-1 to +1) for both components

                          mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                          mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                          // update the picking ray with the camera and mouse position
                          raycaster.setFromCamera(
                              mouse,
                              camera
                          );

                          // calculate objects intersecting the picking ray
                          const [ intersect ] = raycaster.intersectObjects(
                                    scene.children
                                )
                                , point = intersect?.point ?? null
                          ;

                          if( point )
                              isIntersectedByMouse = true;
                          else
                              isIntersectedByMouse = false;

                      }
                      , material = new THREE.ShaderMaterial(
                          {
                              //   wireframe: false,
                              //   transparent: false,
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
                                  progress: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  image: {
                                      type: 't',
                                      value: new THREE.TextureLoader().load(
                                          imageUrlLuna
                                      ),
                                  },
                                  displacement: {
                                      type: 't',
                                      value: new THREE.TextureLoader().load(
                                          imageUrlLuna2
                                      ),
                                  },
                                  mouse: {
                                      type: 'v3',
                                      value: mouse,
                                  },
                                  resolution: {
                                      type: 'v4',
                                      value: new THREE.Vector4(),
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
                      , camera = new THREE.PerspectiveCamera(
                          63,
                          imageWidth / imageHeight,
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
                          1,
                          1,
                      )
                      , plane = new THREE.Mesh(
                          geometry,
                          material
                      )
                      , scene = new THREE.Scene()
                      // External controls
                      , settings = {
                          progress: 0,
                      }
                      , gui = new dat.GUI()
                ;

                canvas.addEventListener(
                    'mousemove',
                    onMouseMove,
                    false
                );

                camera.position.set(
                    0,
                    0,
                    1
                );

                scene.add(
                    plane
                );

                gui.add(
                    settings,
                    'progress',
                    0,
                    1,
                    0.1
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

                        material.uniforms.time.value = time;
                        material.uniforms.progress.value = settings.progress;

                        // Mouse
                        isIntersectedByMouse && ( material.uniforms.mouse.value = mouse );

                        controls.update();

                        renderer.render(
                            scene,
                            camera
                        );

                    },
                    // Dispose of WebGL context (optional)
                    unload() {

                        gui.destroy();
                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
