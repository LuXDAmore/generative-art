<template>
    <main class="container canvas-container">

        <canvas ref="canvas" />

        <h6 ref="title" class="absolute z-index--1 text--center text--red no-pointer-event cursor--pointer">
            Click here to allow<br>
            <small>access to camera and microphone</small>
        </h6>

    </main>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/page-7/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/page-7/shaders/vertexShader.glsl';

    // Three Utils
    const orbitControlsLoader = () => import(
              'three/examples/jsm/controls/OrbitControls'
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
        name: 'microphone-audio-and-video-webcam',
        data: () => (
            {
                sketchManager: null,
            }
        ),
        async mounted() {

            await this.$nextTick();

            // Suggested way
            try {

                this.sketchManager = await this.$sketch(
                    {
                        ... settings,
                        canvas: this.$refs.canvas,
                    },
                    this.sketch,
                );

                // Destroy it
                this.$once(
                    'hook:beforeDestroy',
                    () => this.sketchManager.unload()
                );

            } catch( error ) {

                console.error(
                    error
                );

            }

        },
        methods: {
            async sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                }
            ) {

                const { OrbitControls } = await orbitControlsLoader()
                      , dat = require(
                          'dat.gui'
                      )
                ;

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
                                , point = intersect && intersect.point ? intersect.point : null
                          ;

                          isIntersectedByMouse = !! point;

                      }
                      , camera = new THREE.PerspectiveCamera(
                          63,
                          1,
                          0.001,
                          1000
                      )
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                      , geometry = new THREE.PlaneBufferGeometry(
                          width / height,
                          1,
                          54,
                          54,
                      )
                      //   Audio
                      , frequencyRange = {
                          bass: [
                              20,
                              140,
                          ],
                          lowMid: [
                              140,
                              400,
                          ],
                          mid: [
                              400,
                              2600,
                          ],
                          highMid: [
                              2600,
                              5200,
                          ],
                          treble: [
                              5200,
                              14000,
                          ],
                      }
                      , fftSize = 2048
                      , isAudio = false
                      , listener = new THREE.AudioListener()
                      , audio = new THREE.PositionalAudio(
                          listener
                      )
                      , analyser = new THREE.AudioAnalyser(
                          audio,
                          fftSize
                      )
                      , getFrequencyRangeValue = (
                          data,
                          frequencyRange
                      ) => {

                          const nyquist = 48000 / 2
                                , lowIndex = Math.round(
                                    frequencyRange[ 0 ] / nyquist * data.length
                                )
                                , highIndex = Math.round(
                                    frequencyRange[ 1 ] / nyquist * data.length
                                )
                          ;

                          let total = 0
                              , numberFrequencies = 0
                          ;

                          for( let index = lowIndex; index <= highIndex; index ++ ) {

                              total += data[ index ];
                              numberFrequencies += 1;

                          }

                          return total / numberFrequencies / 255;

                      }
                      , onAudioSuccess = stream => {

                          audio.gain.gain.value = 0.001;

                          // Sta roba qua va
                          audio.setMediaStreamSource(
                              stream
                          );

                          audio.context.resume();
                          isAudio && audio.play();

                      }
                      // Video
                      , video = document.createElement(
                          'video'
                      )
                      , onVideoSuccess = stream => {

                          video.srcObject = stream;
                          video.width = width;
                          video.height = height;
                          video.playsinline = true;
                          video.muted = true;
                          video.autoplay = true;

                          video.addEventListener(
                              'canplaythrough',
                              () => ( material.uniforms.video.value.needsUpdate = true )
                          );

                          video.play();

                      }
                      //   User permissions
                      , askForMedia = async() => {

                          this.$nuxt.$loading.start();

                          // FIXME: It's should be done better
                          canvas.removeEventListener(
                              'click',
                              askForMedia,
                              false
                          );
                          canvas.removeEventListener(
                              'touchstart',
                              askForMedia,
                              false
                          );

                          this.$refs.title.remove();

                          try {

                              const stream = await navigator // eslint-disable-line compat/compat
                                  .mediaDevices
                                  .getUserMedia(
                                      {
                                          audio: true,
                                          video: false,
                                      }
                                  )
                              ;

                              onAudioSuccess( stream );

                          } catch( error ) {

                              console.error(
                                  error
                              );

                              window.alert(
                                  'You must allow access to your microphone'
                              );

                          }

                          try {

                              const stream = await navigator // eslint-disable-line compat/compat
                                  .mediaDevices
                                  .getUserMedia(
                                      {
                                          video: {
                                              width,
                                              height,
                                              facingMode: 'user',
                                          },
                                          audio: false,
                                      }
                                  )
                              ;

                              onVideoSuccess( stream );

                          } catch( error ) {

                              console.error(
                                  error
                              );

                              window.alert(
                                  'You must allow access to your webcam'
                              );

                          }

                          this.$nuxt.$loading.finish();

                      }
                      // Materials
                      , material = new THREE.ShaderMaterial(
                          {
                              // wireframe: true,
                              // transparent: true,
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
                                  mouse_radius: {
                                      type: 'f',
                                      value: 0.3,
                                  },
                                  bass: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  mid: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  treble: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  video: {
                                      type: 't',
                                      value: new THREE.VideoTexture(
                                          video
                                      ),
                                  },
                                  microphone: {
                                      type: 't',
                                      value: new THREE.DataTexture(
                                          analyser.data,
                                          fftSize / 2,
                                          1,
                                          THREE.LuminanceFormat
                                      ),
                                  },
                                  mouse: {
                                      type: 'v3',
                                      value: mouse,
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
                      // External controls
                      , settings = {
                          mouse_radius: 0.3,
                      }
                      , gui = new dat.GUI()
                ;

                canvas.addEventListener(
                    'click',
                    askForMedia,
                    false
                );
                canvas.addEventListener(
                    'touchstart',
                    askForMedia,
                    false
                );

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

                // External settings
                gui.add(
                    settings,
                    'mouse_radius',
                    0,
                    1,
                    0.1
                );

                gui.close();

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

                        // Audio
                        const data = analyser.getFrequencyData()
                              , bass = getFrequencyRangeValue(
                                  data,
                                  frequencyRange.bass
                              )
                              , mid = getFrequencyRangeValue(
                                  data,
                                  frequencyRange.mid
                              )
                              , treble = getFrequencyRangeValue(
                                  data,
                                  frequencyRange.treble
                              )
                        ;

                        material.uniforms.bass.value = bass;
                        material.uniforms.mid.value = mid;
                        material.uniforms.treble.value = treble;

                        material.uniforms.microphone.value.needsUpdate = true;

                        // Timing
                        material.uniforms.time.value = time;
                        material.uniforms.mouse_radius.value = settings.mouse_radius;

                        // Mouse
                        isIntersectedByMouse && ( material.uniforms.mouse.value = mouse );

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

                        audio.context.suspend();
                        isAudio && audio.stop();

                        gui.destroy();
                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>
