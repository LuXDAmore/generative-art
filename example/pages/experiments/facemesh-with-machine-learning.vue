<template>
    <main class="container canvas-container">

        <video
            ref="video"
            preload="auto"
            class="absolute z-index--minus-1 pin cursor--pointer w-screen h-screen"
            playsinline
            autoplay
            muted
        />

        <canvas ref="canvas" class="opacity-50" />

        <h6 class="w-full absolute z-index--2 text--center no-pointer-event pin-r pin-b">
            Click on the video to see your face<br>
            <small>(allow access to camera and microphone)</small>
        </h6>

    </main>
</template>

<script>
    // Facemesh Machine learning
    import { load } from '@tensorflow-models/facemesh';
    import '@tensorflow/tfjs-backend-cpu';
    import '@tensorflow/tfjs-backend-webgl';

    // ThreeJs
    import {
        WebGLRenderer,
        // Mesh, Scene, Material and Geometry
        Points,
        Scene,
        ShaderMaterial,
        PlaneBufferGeometry,
        // Camera
        PerspectiveCamera,
        // Utils
        Color,
        Vector3,
        sRGBEncoding,
        DoubleSide,
        // Buffers
        Float32BufferAttribute,
        BufferAttribute,
        DynamicDrawUsage,
    } from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/facemesh-with-machine-learning/shaders/fragmentShader.frag';
    import vertexShader from '~/assets/pages/facemesh-with-machine-learning/shaders/vertexShader.vert';

    // ThreeJs Camera Controller
    const orbitControlsLoader = () => import(
        'three/examples/jsm/controls/OrbitControls'
    );

    // Page
    export default {
        name: 'three-js-starter',
        created() {

            this.$sketchManager = null;

        },
        async mounted() {

            // Suggested way
            try {

                this.$sketchManager = await this.$sketch(
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

                this.$once(
                    'hook:beforeDestroy',
                    () => this.$sketchManager.unload()
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
                    3
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
            createSceneAndPointsMaterialGeometry(
                {
                    width,
                    height,
                }
            ) {

                // Scene
                const scene = new Scene()
                      , geometry = new PlaneBufferGeometry(
                          width / height,
                          1,
                          21,
                          22
                      )
                      , material = new ShaderMaterial(
                          {
                              vertexShader,
                              fragmentShader,
                              side: DoubleSide,
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
                      , points = new Points(
                          geometry,
                          material
                      )
                ;

                return {
                    scene,
                    points,
                    geometry,
                    material,
                };

            },
            // Attributes
            addAttributes(
                geometry
            ) {

                const number = 468
                      , numberOfCoords = 3
                      , points = new Float32BufferAttribute(
                          new Array(
                              number * numberOfCoords
                          ).fill(
                              0
                          ),
                          numberOfCoords,
                      ).setUsage(
                          DynamicDrawUsage
                      )
                ;

                geometry.setAttribute(
                    'facesPoints',
                    new BufferAttribute(
                        points,
                        numberOfCoords
                    )
                );

            },
            // Faces
            async findFaces() {

                // if( ! this.facemesh )
                //     return;

                // const faces = await this.facemesh.estimateFaces(
                //     this.$refs.video,
                // );

                // if( ! faces.length )
                //     return;

                // Each face object contains a `scaledMesh` property,
                // which is an array of 468 landmarks.
                // faces.forEach(
                //     face => {

                //         if( ! face.mesh )
                //             return;

                //         face.mesh.forEach(
                //             (
                //                 [
                //                     x,
                //                     y,
                //                     z,
                //                 ],
                //                 index
                //             ) => pointsPositions.setXYZ(
                //                 index,
                //                 x,
                //                 y,
                //                 z,
                //             )
                //         );

                //         // pointsGeometry.attributes.position.needsUpdate = true;

                //         // console.info(
                //         //     'Face updated',
                //         //     {
                //         //         pointsGeometry,
                //         //     }
                //         // );

                //     }
                // );

            },
            async webcamReady() {

                // Video loading
                this.facemesh = await load(
                    {
                        maxFaces: 1,
                    }
                );

                await this.findFaces();

            },
            async videoInitialization(
                {
                    width,
                    height,
                }
            ) {

                try {

                    if( ! this.$refs.video )
                        return;

                    // Video
                    this.$refs.video.width = width;
                    this.$refs.video.height = height;

                    // eslint-disable-next-line compat/compat
                    this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia(
                        {
                            audio: false,
                            video: {
                                width,
                                height,
                                facingMode: 'user',
                            },
                        }
                    );

                    await this.$refs.video.play();

                    await this.webcamReady();

                } catch( e ) {

                    console.error(
                        e
                    );

                }

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
                      , {
                          scene,
                          points,
                          material,
                          geometry,
                      } = this.createSceneAndPointsMaterialGeometry(
                          {
                              width,
                              height,
                          }
                      )
                ;

                this.addAttributes(
                    geometry
                );

                scene.add(
                    points
                );

                // Render
                return {
                    render(
                        {
                            playhead,
                            time,
                        }
                    ) {

                        // Shaders
                        material.uniforms.playhead.value = playhead;
                        material.uniforms.time.value = time;

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
