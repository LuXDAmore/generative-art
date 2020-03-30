<template>
    <div class="layout">

        <!-- z-index--minus-1 -->
        <canvas ref="canvas" class="absolute" />

        <nav-menu />

        <nuxt />

    </div>
</template>

<script>
    // ThreeJs
    import * as THREE from 'three';

    // Shaders
    import fragmentShader from '~/assets/pages/navigate/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/navigate/shaders/vertexShader.glsl';

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
            }
        ),
        computed: {
            pageToValue() {

                let page = 1;

                switch( this.$route.path ) {
                case '/navigate/page-2':
                    page = 2;
                    break;
                case '/navigate/page-3':
                    page = 3;
                    break;
                }

                return page;

            },
            pageToGeometry() {

                if( this.pageToValue === 1 )
                    return this.createSphere;

                if( this.pageToValue === 2 )
                    return this.createKlein;

                return this.createGrayKlein;

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
            createPlane(
                u = 1,
                v = 1,
                target
            ) {

                const x = u - 0.5
                      , y = v - 0.5
                      , z = 0
                ;

                target.set(
                    x,
                    y,
                    z
                );

            },
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
            createKlein(
                u = 1,
                v = 1,
                target
            ) {

                u *= - 2 * Math.PI;
                v *= 2 * Math.PI;

                let x
                    , z
                ;

                if( u < Math.PI ) {

                    x = 3
                        * Math.cos(
                            u
                        )
                        * (
                            1
                            + Math.sin(
                                u
                            )
                        )
                        + (
                            2
                            * (
                                1
                                - Math.cos(
                                    u
                                )
                                / 2
                            )
                        )
                        * Math.cos(
                            u
                        )
                        * Math.cos(
                            v
                        )
                    ;

                    z = - 8
                        * Math.sin(
                            u
                        )
                        - 2
                        * (
                            1
                            - Math.cos(
                                u
                            )
                            / 2
                        )
                        * Math.sin(
                            u
                        )
                        * Math.cos(
                            v
                        )
                    ;

                } else {

                    x = 3
                        * Math.cos(
                            u
                        )
                        * (
                            1
                            + Math.sin(
                                u
                            )
                        )
                        + (
                            2
                            * (
                                1
                                - Math.cos(
                                    u
                                )
                                / 2
                            )
                        )
                        * Math.cos(
                            v + Math.PI
                        )
                    ;

                    z = - 8 * Math.sin(
                        u
                    );

                }

                const y = - 2 * ( 1 - Math.cos(
                    u
                ) / 2 ) * Math.sin(
                    v
                );

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
                          this.pageToGeometry,
                          100,
                          100
                      )
                      , sphereGeometry = new THREE.ParametricBufferGeometry(
                          this.createSphere,
                          100,
                          100
                      )
                      , kleinGeometry = new THREE.ParametricBufferGeometry(
                          this.createKlein,
                          100,
                          100
                      )
                      , grayKleinGeometry = new THREE.ParametricBufferGeometry(
                          this.createGrayKlein,
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
                              shading: THREE.FlatShading,
                              uniforms: {
                                  time: {
                                      type: 'f',
                                      value: 0,
                                  },
                                  page: {
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

                geometry.setAttribute(
                    'positionKlein',
                    new THREE.BufferAttribute(
                        kleinGeometry.attributes.position.array,
                        3
                    )
                );

                geometry.setAttribute(
                    'positionGrayKlein',
                    new THREE.BufferAttribute(
                        grayKleinGeometry.attributes.position.array,
                        3
                    )
                );

                // Camera things
                camera.position.set(
                    1,
                    1,
                    12
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
                        material.uniforms.page.value = this.pageToValue;

                        plane.rotation.x += 0.000001;
                        plane.rotation.y += 0.01;

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

<style
    scoped
    src="./style.css"
></style>
