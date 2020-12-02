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

        <canvas
            ref="canvas"
            :class="{
                'opacity-90': showBackground,
            }"
        />

        <div class="w-full absolute z-index--2 pin-b text--center">

            <button
                v-if="! continuosRafCheck"
                :disabled="loading"
                type="button"
                @click.prevent="face()"
            >

                <template v-if="isWebcamReady">
                    Click to update face points geometry
                </template>
                <template v-else-if="loading">
                    <strong>Loading...</strong><br>
                    <small><em>Please wait (sometimes it takes a while)..</em></small>
                </template>
                <template v-else>
                    <strong>Click to start FaceRecognition</strong><br>
                    <small>(<em>You must allow access to your camera</em>)</small>
                </template>

            </button>

            <template v-if="isWebcamReady">

                <br>

                <label for="continuosRafCheck">

                    <input
                        id="continuosRafCheck"
                        v-model="continuosRafCheck"
                        :disabled="! isWebcamReady"
                        type="checkbox"
                    >

                    Let FaceRecognition execute on the <strong>requestAnimationFrame</strong>

                </label>

                <br>

                <label for="showBackground">

                    <input
                        id="showBackground"
                        v-model="showBackground"
                        :disabled="! isWebcamReady"
                        type="checkbox"
                    >

                    Keep the webcam background?

                </label>

            </template>

        </div>

    </main>
</template>

<script>
    // Facemesh Machine learning
    import { load, SupportedPackages } from '@tensorflow-models/face-landmarks-detection';
    import { UV_COORDS } from '@tensorflow-models/face-landmarks-detection/dist/mediapipe-facemesh/uv_coords';
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
        sRGBEncoding,
        // Buffers
        Float32BufferAttribute,
        DynamicDrawUsage,
    } from 'three';

    // Gsap
    import gsap from 'gsap';

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
                showBackground: false,
                continuosRafCheck: false,
                isWebcamReady: false,
                loading: false,
                // Points
                pointsSize: 20,
            }
        ),
        created() {

            // Sketch Manager
            this.$sketchManager = null;

            // Face library
            this.$facemesh = null;

            // Geometry utils
            this.$camera = null;
            this.$geometry = null;

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
                    context: { canvas },
                    width,
                    height,
                }
            ) {

                // Camera
                const camera = new PerspectiveCamera(
                    70,
                    width / height,
                    0.001,
                    2000
                );

                camera.position.set(
                    0,
                    0,
                    - 6
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
                                  pointsSize: {
                                      type: 'f',
                                      value: this.pointsSize,
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
                      // Position
                      , numberOfPositions = 3
                      , arrayOfPositions = Array.from(
                          {
                              length: number * numberOfPositions,
                          },
                          Math.random
                      )
                      , position = new Float32BufferAttribute(
                          arrayOfPositions,
                          numberOfPositions,
                      ).setUsage(
                          DynamicDrawUsage
                      )
                      , positionAttributeName = 'position'
                      // uv
                      , numberOfUv = 2
                      , arrayOfUv = UV_COORDS.flat()
                      , uv = new Float32BufferAttribute(
                          arrayOfUv,
                          numberOfUv,
                      )
                      , uvAttributeName = 'uv'
                ;

                position.name = positionAttributeName;
                geometry.setAttribute(
                    positionAttributeName,
                    position
                );

                uv.name = uvAttributeName;
                geometry.setAttribute(
                    uvAttributeName,
                    uv
                );

                geometry.computeVertexNormals();
                geometry.computeBoundingBox();
                geometry.computeBoundingSphere();

                geometry.rotateX(
                    180
                );

                geometry.center();

                geometry.attributes.position.needsUpdate = true;
                geometry.attributes.uv.needsUpdate = true;

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

                // Moving the camera
                gsap.to(
                    this,
                    {
                        pointsSize: 5,
                        ease: 'expo.in',
                        duration: 1.5,
                    }
                );

                gsap.to(
                    this.$camera.position,
                    {
                        z: - 1000,
                        ease: 'expo.in',
                        duration: 4,
                        onComplete: () => this.$camera.updateProjectionMatrix(),
                    }
                );

                // Loading
                this.loading = true;
                this.$nuxt.$loading.start();

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

                    this.showBackground = true;

                    // Start the recognition
                    await this.facemeshInit();

                    await this.findFaces();

                    this.isWebcamReady = true;

                    // Moving the camera back
                    gsap.to(
                        this.$camera.position,
                        {
                            duration: 5,
                            ease: 'expo.out',
                            z: - 500,
                            onComplete: () => this.$camera.updateProjectionMatrix(),
                        }
                    );

                    gsap.to(
                        this,
                        {
                            pointsSize: 1250,
                            ease: 'expo.out',
                            duration: 3,
                        }
                    );

                } catch( e ) {

                    console.error(
                        e
                    );

                }

                // Loading finished
                this.$nuxt.$loading.finish();
                this.loading = false;

            },
            async facemeshInit() {

                try {

                    // Load the Face library
                    this.$facemesh = await load(
                        SupportedPackages.mediapipeFacemesh,
                        {
                            maxFaces: 1,
                        }
                    );

                } catch( e ) {

                    console.error(
                        e
                    );

                }

            },
            async findFaces() {

                if( ! this.$facemesh )
                    return;

                try {

                    const faces = await this.$facemesh.estimateFaces(
                        {
                            input: this.$refs.video,
                            predictIrises: false,
                            flipHorizontal: true,
                        }
                    );

                    if( ! faces.length )
                        return;

                    // Each face object contains a `scaledMesh` property,
                    // which is an array of 468 landmarks.
                    faces.forEach(
                        face => {

                            const { scaledMesh: points } = face;

                            this.$geometry.attributes.position.array = new Float32Array(
                                points.flat()
                            );

                            this.$geometry.computeVertexNormals();
                            this.$geometry.computeBoundingBox();
                            this.$geometry.computeBoundingSphere();

                            this.$geometry.rotateX(
                                180
                            );

                            this.$geometry.center();

                            this.$geometry.attributes.position.needsUpdate = true;

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
                              context,
                              width: window.innerWidth,
                              height: window.innerHeight,
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

                this.$camera = camera;
                this.$geometry = geometry;

                // Render
                return {
                    render: async(
                        {
                            playhead,
                            time,
                        }
                    ) => {

                        // FaceRecognition on rAF
                        this.continuosRafCheck && await this.findFaces();

                        // Shaders
                        material.uniforms.playhead.value = playhead;
                        material.uniforms.time.value = time;

                        if( this.pointsSize !== material.uniforms.pointsSize.value )
                            material.uniforms.pointsSize.value = this.pointsSize;

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
