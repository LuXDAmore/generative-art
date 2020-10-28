<template>
    <div class="layout">

        <canvas ref="canvas" class="absolute z-index--minus-1" />

        <nav-menu />

        <nuxt />

    </div>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';
    import gsap from 'gsap';

    // Shaders
    import fragmentShader from '~/assets/pages/navigate/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/navigate/shaders/vertexShader.glsl';

    // Three Utils
    const orbitControlsImporter = () => import(
              'three/examples/jsm/controls/OrbitControls'
          ).then(
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
          }
    ;

    // Layout
    export default {
        name: 'navigate',
        components: {
            'nav-menu': () => import(
                '~/components/NavMenu'
            ),
        },
        data: () => (
            {
                sketchManager: null,
                animations: {
                    pageValue: 0,
                },
            }
        ),
        computed: {
            pageToValue() {

                let page = 0;

                switch( this.$route.path ) {
                case '/navigate/page-2':
                    page = 0.5;
                    break;
                case '/navigate/page-3':
                    page = 1;
                    break;
                }

                return page;

            },
        },
        watch: {
            '$route.path': {
                handler: 'onRouteChange',
                immediate: true,
            },
        },
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
            createSphere(
                u = 1,
                v = 1,
                target
            ) {

                u *= - Math.PI;
                v *= 2 * Math.PI;

                const x = (
                          Math.sin(
                              u
                          )
                          * Math.cos(
                              v
                          )
                      )
                      , y = (
                          Math.sin(
                              u
                          )
                          * Math.sin(
                              v
                          )
                      )
                      , z = Math.cos(
                          u
                      )
                ;

                target.set(
                    x,
                    y,
                    z
                );

            },
            // http://paulbourke.net/geometry/toroidal/
            createGrayKlein(
                u = 1,
                v = 1,
                target
            ) {

                u *= - 4 * Math.PI;
                v *= 2 * Math.PI;

                const a = 3
                      , n = 3
                      , m = 1
                      , x = (
                          a
                          + Math.cos(
                              n * u / 2
                          )
                          * Math.sin(
                              v
                          )
                          - Math.sin(
                              n * u / 2
                          )
                          * Math.sin(
                              2 * v
                          )
                      )
                          * Math.cos(
                              m * u / 2
                          )
                      , y = (
                          a
                          + Math.cos(
                              n * u / 2
                          )
                          * Math.sin(
                              v
                          ) - Math.sin(
                              n * u / 2
                          )
                          * Math.sin(
                              2 * v
                          )
                      )
                          * Math.sin(
                              m * u / 2
                          )
                      , z = Math.sin(
                          n * u / 2
                      )
                          * Math.sin(
                              v
                          )
                          + Math.cos(
                              n * u / 2
                          )
                          * Math.sin(
                              2 * v
                          )
                ;

                target.set(
                    x,
                    y,
                    z
                );

            },
            // Animate
            onRouteChange() {

                gsap.to(
                    this.animations,
                    {
                        duration: 0.63,
                        pageValue: this.pageToValue,
                    }
                );

            },
            // Sketch
            async sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                    pixelRatio,
                }
            ) {

                const { OrbitControls } = await orbitControlsImporter()
                      , aspectRatio = width / height
                      , realPixelRatio = pixelRatio > 3 ? 3 : pixelRatio
                      // Create a renderer
                      , renderer = new THREE.WebGLRenderer(
                          {
                              context,
                          }
                      )
                      , camera = new THREE.PerspectiveCamera(
                          45,
                          aspectRatio,
                          0.001,
                          1000
                      )
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                      , geometry = new THREE.ParametricBufferGeometry(
                          this.createGrayKlein,
                          100,
                          100
                      )
                      , sphereGeometry = new THREE.ParametricBufferGeometry(
                          this.createSphere,
                          100,
                          100
                      )
                      // Materials
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
                                  page: {
                                      type: 'f',
                                      value: this.animations.pageValue,
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

                // Renderer things
                renderer.setPixelRatio(
                    realPixelRatio
                );

                renderer.setSize(
                    width,
                    height
                );

                renderer.setClearColor(
                    new THREE.Color(
                        '#333'
                    ),
                    1
                );

                // Geometry things
                geometry.setAttribute(
                    'positionSphere',
                    new THREE.BufferAttribute(
                        sphereGeometry.attributes.position.array,
                        3
                    )
                );

                // Camera things
                camera.position.set(
                    1,
                    1,
                    18
                );

                camera.updateProjectionMatrix();

                // Scene things
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
                    render: (
                        { time }
                    ) => {

                        // Timing
                        material.uniforms.time.value = time;
                        material.uniforms.page.value = this.animations.pageValue;

                        plane.rotateX(
                            0.001
                        );
                        plane.rotateY(
                            0.001
                        );

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

                        controls.dispose();
                        renderer.dispose();

                    },
                };

            },
        },
    };
</script>

<style
    scoped
    src="./style.css"
></style>
