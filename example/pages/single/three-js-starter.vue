<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

    </main>
</template>

<script>
    // ThreeJs
    import {
        WebGLRenderer,
        // Mesh, Scene, Material and Geometry
        Mesh,
        Scene,
        MeshStandardMaterial,
        BoxBufferGeometry,
        // Camera
        PerspectiveCamera,
        // Utils
        Color,
        Vector3,
        sRGBEncoding,
        DoubleSide,
    } from 'three';

    // ThreeJs Camera Controller
    const orbitControlsLoader = () => import(
              'three/examples/jsm/controls/OrbitControls'
          )
          // ThreeJs Lights
          , pointLightLoader = () => import(
              'three/src/lights/PointLight'
          )
    ;

    // Page
    export default {
        name: 'three-js-starter',
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
                        duration: 10,
                        context: 'webgl',
                        attributes: {
                            antialias: true,
                        },
                        canvas: this.$refs.canvas,
                    },
                    // Method for the rendering
                    this.sketch,
                );

                // Destroy it
                this.$once(
                    'hook:beforeDestroy',
                    () => this.sketchManager.unload()
                );

            } catch( e ) {

                console.error(
                    e
                );

            }

        },
        methods: {
            createRenderer(
                context
            ) {

                // Renderer
                const renderer = new WebGLRenderer(
                    {
                        context,
                    }
                );

                renderer.setClearColor(
                    new Color(
                        '#121212'
                    ),
                    1
                );

                renderer.outputEncoding = sRGBEncoding;
                renderer.physicallyCorrectLights = true;

                return renderer;

            },
            async createCameraAndControls(
                {
                    width,
                    height,
                    context: { canvas },
                }
            ) {

                // Camera
                const camera = new PerspectiveCamera(
                    45,
                    width / height,
                    0.1,
                    100
                );

                camera.position.set(
                    0,
                    0,
                    6
                );

                camera.lookAt(
                    new Vector3()
                );

                // Controls
                const { OrbitControls } = await orbitControlsLoader()
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                ;

                return {
                    camera,
                    controls,
                };

            },
            createSceneAndMeshMaterialGeometry() {

                // Scene
                const scene = new Scene()
                      , geometry = new BoxBufferGeometry(
                          1,
                          1,
                          1
                      )
                      , material = new MeshStandardMaterial(
                          {
                              side: DoubleSide,
                              color: new Color(
                                  '#fff'
                              ),
                          }
                      )
                      , mesh = new Mesh(
                          geometry,
                          material
                      )
                ;

                return {
                    scene,
                    mesh,
                    material,
                };

            },
            async createLights() {

                const { PointLight } = await pointLightLoader()
                      , light = new PointLight(
                          new Color(
                              '#f05'
                          ),
                          500,
                          100,
                          2
                      )
                ;

                light.position.set(
                    8,
                    10,
                    13
                );

                return {
                    light,
                };

            },
            // Sketch for canvas-sketch
            async sketch(
                {
                    context,
                    width,
                    height,
                }
            ) {

                const renderer = this.createRenderer(
                          context
                      )
                      , {
                          camera,
                          controls,
                      } = await this.createCameraAndControls(
                          {
                              width,
                              height,
                              context,
                          }
                      )
                      , { light } = await this.createLights()
                      , {
                          scene,
                          mesh,
                      } = this.createSceneAndMeshMaterialGeometry()
                ;

                scene.add(
                    light
                );

                scene.add(
                    mesh
                );

                // Render
                return {
                    render(
                        { playhead }
                    ) {

                        const speed = ( playhead * 2 * Math.PI );

                        // Animation -> depends on `duration` setting
                        mesh.rotation.y = speed;
                        mesh.rotation.z = speed;

                        // Controls
                        controls.update();

                        // Renderer
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

                        // Renderer
                        renderer.setPixelRatio(
                            pixelRatio
                        );

                        renderer.setSize(
                            viewportWidth,
                            viewportHeight,
                            false
                        );

                        // Camera
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
