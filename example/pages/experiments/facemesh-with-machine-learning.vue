<template>
    <main class="container canvas-container">

        <video
            ref="video"
            preload="none"
            class="absolute z-index--minus-1 pin cursor--pointer w-screen h-screen"
            playsinline
            autoplay
            muted
        />

        <canvas ref="canvas" class="opacity-50" />

        <button
            type="button"
            class="w-full absolute z-index--2 pin-b"
            @click.prevent="face()"
        >
            <template v-if="! isWebcamReady">
                Click here to see your face<br>
                <small>(You must allow access to your camera)</small>
            </template>
            <template v-else>
                Click to update the face points geometry
            </template>
        </button>

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
        BufferGeometry,
        // Camera
        PerspectiveCamera,
        // Utils
        Color,
        Vector3,
        sRGBEncoding,
        DoubleSide,
        // Buffers
        Float32BufferAttribute,
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
        data: () => (
            {
                width: 500,
                height: 500,
                isWebcamReady: false,
            }
        ),
        created() {

            this.$sketchManager = null;

            // Faces and geometry utils
            this.$facemesh = null;
            this.$geometry = null;
            this.$camera = null;
            this.$scene = null;

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
                {
                    context,
                    width,
                    height,
                    color = '#111',
                }
            ) {

                // Renderer
                const renderer = new WebGLRenderer(
                    {
                        context,
                        depth: false,
                        antialias: true,
                    }
                );

                renderer.setClearColor(
                    new Color(
                        color
                    ),
                    1
                );

                renderer.setSize(
                    width,
                    height
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
                    70,
                    width / height,
                    0.001,
                    1000
                );

                camera.position.set(
                    0,
                    0,
                    3
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
            createSceneAndPointsMaterialGeometry() {

                // Scene
                const scene = new Scene()
                      , geometry = new BufferGeometry()
                      , material = new ShaderMaterial(
                          {
                              depthTest: false,
                              depthWrite: false,
                              transparent: true,
                              vertexShader,
                              fragmentShader,
                              side: DoubleSide,
                              extensions: {
                                  derivatives: '#extension GL_OES_standard_derivatives : enable',
                              },
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
                ;

                geometry.name = 'face';

                return {
                    scene,
                    geometry,
                    material,
                };

            },
            createPoints(
                material,
                geometry,
            ) {

                const points = new Points(
                    geometry,
                    material
                );

                return points;

            },
            // Attributes
            addAttributes(
                geometry
            ) {

                const number = 468
                      , numberOfCoords = 3
                      , arrayOfPoints = Array.from(
                          {
                              length: number * numberOfCoords,
                          },
                          Math.random
                      )
                      , points = new Float32BufferAttribute(
                          arrayOfPoints,
                          numberOfCoords,
                      ).setUsage(
                          DynamicDrawUsage
                      )
                      , attributeName = 'position'
                ;

                points.name = attributeName;

                geometry.setAttribute(
                    attributeName,
                    points
                );

            },
            // Faces
            async face(
                width = this.width,
                height = this.height,
            ) {

                if( ! this.$refs.video )
                    return;

                if( this.isWebcamReady || this.$facemesh ) {

                    await this.findFaces();

                    return;

                }

                try {

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

                    // Start the recognition
                    await this.facemeshInit();

                    this.isWebcamReady = true;

                    await this.findFaces();

                } catch( e ) {

                    console.error(
                        e
                    );

                }

            },
            async facemeshInit() {

                this.$nuxt.$loading.start();

                try {

                    // Load the Face library
                    this.$facemesh = await load(
                        {
                            maxFaces: 1,
                        }
                    );

                } catch( e ) {

                    console.error(
                        e
                    );

                }

                this.$nuxt.$loading.finish();

            },
            async findFaces() {

                if( ! this.$facemesh )
                    return;

                try {

                    const faces = await this.$facemesh.estimateFaces(
                        this.$refs.video,
                    );

                    if( ! faces.length )
                        return;

                    console.info(
                        'Faces found',
                        faces
                    );

                    // Each face object contains a `scaledMesh` property,
                    // which is an array of 468 landmarks.
                    faces.forEach(
                        face => {

                            if( ! face.mesh )
                                return;

                            const {
                                      mesh: points,
                                      //   boundingBox,
                                  } = face
                                  , position = []
                            ;

                            points.forEach(
                                (
                                    [
                                        x,
                                        y,
                                        z,
                                    ]
                                ) => {

                                    const {
                                        x: xN,
                                        y: yN,
                                        z: zN,
                                    } = new Vector3(
                                        x,
                                        y,
                                        z
                                    ).normalize();

                                    position.push(
                                        xN,
                                        yN,
                                        zN
                                    );

                                }
                            );

                            this.$geometry.attributes.position.array = new Float32Array(
                                position
                            );

                            this.$geometry.attributes.position.needsUpdate = true;

                            this.$geometry.computeBoundingSphere();

                            console.info(
                                'Face updated',
                                {
                                    position,
                                    geometry: this.$geometry,
                                    scene: this.$scene,
                                }
                            );

                        }
                    );

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

                this.width = width;
                this.height = height;

                const renderer = this.createRenderer(
                          {
                              context,
                              width,
                              height,
                          }
                      )
                      , {
                          camera,
                          controls,
                      } = await this.createCameraAndControls(
                          {
                              width: window.innerWidth,
                              height: window.innerHeight,
                              context,
                          }
                      )
                      , {
                          scene,
                          material,
                          geometry,
                      } = this.createSceneAndPointsMaterialGeometry()
                ;

                this.addAttributes(
                    geometry
                );

                const points = this.createPoints(
                    material,
                    geometry
                );

                scene.add(
                    points
                );

                this.$geometry = geometry;
                this.$camera = camera;
                this.$scene = scene;

                console.info(
                    'Sketch ready',
                    {
                        geometry: this.$geometry,
                    }
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
