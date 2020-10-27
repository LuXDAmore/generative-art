<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

        <video
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
                {
                    context,
                    width,
                    height,
                    pixelRatio,
                    update,
                }
            ) {

                // Renderer
                const renderer = new THREE.WebGLRenderer(
                    {
                        context,
                        antialias: true,
                        alpha: true,
                    }
                );

                renderer.setClearColor(
                    new THREE.Color(
                        '#333'
                    ),
                    1
                );

                const getPixelRatio = (
                          p = pixelRatio
                      ) => ( p >= 3 ? 3 : p )
                      , calcWidthAndHeight = (
                          w = width,
                          h = height,
                          minify = 1,
                          ratio = w / h
                      ) => {

                          const width = ( h * ratio ) / minify
                                , height = h / minify
                          ;

                          return {
                              width,
                              height,
                              ratio,
                          };

                      }
                      , dimensions = calcWidthAndHeight()
                ;

                renderer.physicallyCorrectLights = true;
                renderer.outputEncoding = THREE.sRGBEncoding;

                // Camera
                const camera = new THREE.PerspectiveCamera(
                    81,
                    dimensions.width / dimensions.height,
                    0.01,
                );

                camera.position.z = 1000;

                // Controls
                const { OrbitControls } = await orbitControlsImporter()
                      , controls = new OrbitControls(
                          camera,
                          context.canvas
                      )
                      // Scene
                      , scene = new THREE.Scene()
                      , planeGeometry = new THREE.PlaneBufferGeometry(
                          1000,
                          1000,
                          10,
                          10
                      )
                      , planeMaterial = new THREE.MeshBasicMaterial(
                          {
                              color: new THREE.Color(
                                  '#123'
                              ),
                              side: THREE.DoubleSide,
                          }
                      )
                      , pointsGeometry = new THREE.BufferGeometry()
                      , pointsMaterial = new THREE.ShaderMaterial(
                          {
                              vertexShader,
                              fragmentShader,
                              extensions: {
                                  derivatives: '#extension GL_OES_standard_derivatives : enable',
                              },
                              depthTest: false,
                              depthWrite: false,
                              transparent: true,
                              side: THREE.DoubleSide,
                              uniforms: {
                                  uPlayhead: {
                                      type: 'f',
                                      value: 0,
                                  },
                              },
                          }
                      )
                      , points = new THREE.Points(
                          pointsGeometry,
                          pointsMaterial
                      )
                      , plane = new THREE.Mesh(
                          planeGeometry,
                          planeMaterial
                      )
                      // Attributes
                      , number = 468
                      , numberOfCoords = 3
                      , videoRatioDimension = 3
                      , pointsPositions = new THREE
                          .Float32BufferAttribute(
                              new Array(
                                  number * numberOfCoords
                              ).fill(
                                  0
                              ),
                              numberOfCoords,
                          )
                          .setUsage(
                              THREE.DynamicDrawUsage
                          )
                ;

                planeGeometry.name = 'face';
                pointsPositions.name = 'position';

                pointsGeometry.setAttribute(
                    'position',
                    pointsPositions
                );

                scene.add(
                    points
                );

                scene.add(
                    plane
                );

                if( ! this.$refs.video )
                    return;

                // Faces
                const findFaces = async() => {

                          if( ! this.facemesh )
                              return;

                          const faces = await this.facemesh.estimateFaces(
                              this.$refs.video,
                          );

                          if( ! faces.length )
                              return;

                          // Each face object contains a `scaledMesh` property,
                          // which is an array of 468 landmarks.
                          faces.forEach(
                              face => {

                                  if( ! face.scaledMesh )
                                      return;

                                  face.scaledMesh.forEach(
                                      (
                                          [
                                              x,
                                              y,
                                              z,
                                          ],
                                          index
                                      ) => pointsPositions.setXYZ(
                                          index,
                                          x,
                                          y,
                                          z,
                                      )
                                  );

                                  pointsGeometry.attributes.position.needsUpdate = true;

                                  console.info(
                                      'Face updated',
                                      {
                                          pointsGeometry,
                                      }
                                  );

                              }
                          );

                      }
                      // Webcam
                      , webcamReady = async() => {

                          // Video loading
                          this.facemesh = await facemesh.load(
                              {
                                  maxFaces: 1,
                              }
                          );

                          await findFaces();

                      }
                      // Webcam to Video
                      , videoInitialization = async(
                          w = width,
                          h = height
                      ) => {

                          try {

                              if( ! this.$refs.video )
                                  return;

                              // Video
                              const videoDimension = calcWidthAndHeight(
                                        w,
                                        h,
                                        videoRatioDimension
                                    )
                                    , videoWidth = videoDimension.width
                                    , videoHeight = videoDimension.height
                              ;

                              this.$refs.video.width = videoWidth;
                              this.$refs.video.height = videoHeight;

                              // eslint-disable-next-line compat/compat
                              this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia(
                                  {
                                      audio: false,
                                      video: {
                                          width: w,
                                          height: h,
                                          facingMode: 'user',
                                      },
                                  }
                              );

                              await webcamReady();

                              await this.$refs.video.play();

                          } catch( e ) {

                              console.error(
                                  e
                              );

                          }

                      }
                ;

                // Webcam
                this.$refs.video.addEventListener(
                    'click',
                    findFaces,
                    false
                );

                this.$refs.video.addEventListener(
                    'playing',
                    findFaces,
                    false
                );

                // Render
                return {
                    render(
                        { playhead }
                    ) {

                        // Uniforms for Shaders
                        pointsMaterial.uniforms.uPlayhead.value = playhead;

                        // Camera
                        controls.update();

                        // Threejs
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

                        console.info(
                            'resize',
                            viewportWidth,
                            viewportHeight,
                        );

                        const dimensions = calcWidthAndHeight(
                            viewportWidth,
                            viewportHeight,
                        );

                        update(
                            {
                                dimensions: [
                                    dimensions.width,
                                    dimensions.height,
                                ],
                            }
                        );

                        renderer.setSize(
                            dimensions.width,
                            dimensions.height,
                            false
                        );

                        renderer.setPixelRatio(
                            getPixelRatio(
                                pixelRatio
                            )
                        );

                        camera.aspect = dimensions.width / dimensions.height;

                        camera.updateProjectionMatrix();

                        videoInitialization();

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
