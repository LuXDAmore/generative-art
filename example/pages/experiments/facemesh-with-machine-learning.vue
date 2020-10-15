<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

        <video
            v-show="showVideo"
            ref="video"
            preload="auto"
            class="absolute z-index--1 pin-r pin-b cursor--pointer"
            playsinline
            autoplay
            muted
        />

    </main>
</template>

<script>
    // Facemesh Machine learning
    import * as facemesh from '@tensorflow-models/facemesh';
    import '@tensorflow/tfjs-backend-cpu';
    import '@tensorflow/tfjs-backend-webgl';

    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/facemesh-with-machine-learning/shaders/fragmentShader.frag';
    import vertexShader from '~/assets/pages/facemesh-with-machine-learning/shaders/vertexShader.vert';

    // ThreeJs Camera Controller
    const orbitControlsImporter = () => import(
        'three/examples/jsm/controls/OrbitControls'
    ).then(
        m => m.default || m
    );

    export default {
        name: 'facemesh-with-machine-learning',
        data: () => (
            {
                sketchManager: null,
                facemesh: null,
                showVideo: true,
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
                {
                    context,
                    width,
                    height,
                }
            ) {

                if( ! this.$refs.video )
                    return;

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

                renderer.setSize(
                    width,
                    height
                );

                renderer.physicallyCorrectLights = true;
                renderer.outputEncoding = THREE.sRGBEncoding;

                // Camera
                const camera = new THREE.PerspectiveCamera(
                    54,
                    1,
                    0.01,
                );

                camera.position.set(
                    2,
                    1,
                    4,
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
                      // Video
                      , videoWidth = 250
                      , videoHeight = 160
                      // Scene
                      , scene = new THREE.Scene()
                      , geometry = new THREE.PlaneBufferGeometry(
                          3,
                          3,
                          54,
                          54,
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
                                  video: {
                                      type: 't',
                                      value: new THREE.VideoTexture(
                                          this.$refs.video
                                      ),
                                  },
                              },
                          }
                      )
                      , plane = new THREE.Mesh(
                          geometry,
                          material
                      )
                      // Attributes
                      , vertices = new Float32Array(
                          new Array(
                              1404
                          ).fill(
                              0
                          )
                      )
                      , faceLandmarks = new THREE.BufferAttribute(
                          vertices,
                          3,
                      )
                ;

                faceLandmarks.name = 'faceLandmarks';

                geometry.setAttribute(
                    'faceLandmarks',
                    faceLandmarks
                );

                scene.add(
                    plane
                );

                // Faces
                const findFaces = async() => {

                          console.info(
                              geometry.attributes.faceLandmarks
                          );

                          if( ! this.facemesh )
                              return;

                          const faces = await this.facemesh.estimateFaces(
                              this.$refs.video
                          );

                          if( ! faces.length )
                              return;

                          // Each face object contains a `scaledMesh` property,
                          // which is an array of 468 landmarks.
                          faces.forEach(
                              face => {

                                  const vertices = new Float32Array(
                                      face.scaledMesh.flat()
                                  );

                                  geometry.attributes.faceLandmarks.array = vertices;
                                  geometry.attributes.faceLandmarks.needsUpdate = true;

                              }
                          );

                      }
                      // Webcam
                      , webcamReady = async() => {

                          console.info(
                              'Video clicked'
                          );

                          // Video loading
                          this.facemesh = await facemesh.load(
                              {
                                  maxFaces: 1,
                              }
                          );

                          await findFaces();

                      }
                ;

                // Webcam
                this.$refs.video.width = videoWidth;
                this.$refs.video.height = videoHeight;

                this.$refs.video.addEventListener(
                    'click',
                    webcamReady,
                    false
                );

                try {

                    // eslint-disable-next-line
                    this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia(
                        {
                            audio: false,
                            video: {
                                width: videoWidth,
                                height: videoHeight,
                                facingMode: 'user',
                            },
                        }
                    );

                    this.$refs.video.play();

                } catch( e ) {

                    console.error(
                        e
                    );

                }

                // Render
                return {
                    render(
                        {
                            time,
                            playhead,
                        }
                    ) {

                        // Animation -> depends on `duration`
                        // plane.rotation.y = playhead * 2 * Math.PI;

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
