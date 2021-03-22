<template>
    <div class="layout">

        <canvas ref="canvas" class="absolute z-index--minus-1" />

        <nav-menu />

        <div class="main-title">

            <h1>Navigate through pages</h1>

            <h2>
                <em>enhance your creative 3D / UX / Visual art while browsing</em>
            </h2>

        </div>

        <nuxt />

    </div>
</template>

<script>
    // ThreeJs
    // ThreeJs
    import {
        WebGLRenderer,
        // Mesh, Scene, Material and Geometry
        Mesh,
        Scene,
        BufferAttribute,
        ParametricBufferGeometry,
        ShaderMaterial,
        Vector2,
        // Camera
        PerspectiveCamera,
        // Utils
        Color,
        DoubleSide,
    } from 'three';

    import gsap from 'gsap';

    // Shaders
    import fragmentShader from '~/assets/pages/navigate/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/navigate/shaders/vertexShader.glsl';

    // Three Utils
    const orbitControlsLoader = () => import(
        'three/examples/jsm/controls/OrbitControls'
    );

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
        async mounted() {

            try {

                this.sketchManager = await this.$sketch(
                    {
                        // Make the loop animated
                        animate: true,
                        // Get a WebGL canvas rather than 2D
                        context: 'webgl',
                        // Turn on MSAA
                        attributes: {
                            antialias: true,
                        },
                        // Canvas
                        canvas: this.$refs.canvas,
                    },
                    this.sketch,
                );

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
                        duration: 2,
                        ease: 'sine.inOut',
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

                const { OrbitControls } = await orbitControlsLoader()
                      , aspectRatio = width / height
                      , realPixelRatio = pixelRatio
                      // Create a renderer
                      , renderer = new WebGLRenderer(
                          {
                              context,
                          }
                      )
                      , camera = new PerspectiveCamera(
                          70,
                          aspectRatio,
                          0.001,
                          1000
                      )
                      , controls = new OrbitControls(
                          camera,
                          canvas
                      )
                      , geometry = new ParametricBufferGeometry(
                          this.createGrayKlein,
                          100,
                          100
                      )
                      , sphereGeometry = new ParametricBufferGeometry(
                          this.createSphere,
                          100,
                          100,
                      )
                      // Materials
                      , material = new ShaderMaterial(
                          {
                              vertexShader,
                              fragmentShader,
                              extensions: {
                                  derivatives: '#extension GL_OES_standard_derivatives : enable',
                              },
                              side: DoubleSide,
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
                                      value: new Vector2(
                                          width,
                                          height,
                                      ),
                                  },
                                  uvRate1: {
                                      value: new Vector2(
                                          1,
                                          1
                                      ),
                                  },
                              },
                          }
                      )
                      , plane = new Mesh(
                          geometry,
                          material
                      )
                      // Scene
                      , scene = new Scene()
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
                    new Color(
                        '#111'
                    ),
                    1
                );

                // Geometry things
                geometry.setAttribute(
                    'positionSphere',
                    new BufferAttribute(
                        sphereGeometry.attributes.position.array,
                        3
                    )
                );

                // Camera things
                camera.position.set(
                    0,
                    0,
                    9
                );

                geometry.center();

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
    src="./shared.css"
></style>

<style
    scoped
    src="./navigate.css"
></style>
