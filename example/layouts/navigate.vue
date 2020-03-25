<template>
    <div class="layout">

        <canvas ref="canvas" class="absolute z-index--minus-1" />

        <nav-menu />

        <nuxt />

    </div>
</template>

<script>
    // Shaders
    import fragmentShader from '~/assets/pages/navigate/shaders/fragmentShader.glsl';
    import vertexShader from '~/assets/pages/navigate/shaders/vertexShader.glsl';

    // Sketch
    import * as THREE from 'three';

    // Canvas sketch
    const settings = {
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
            pageValue() {

                let page = 0;

                switch( this.$route.path ) {
                case '/navigate/page-1':
                    page = 0.1;
                    break;
                case '/navigate/page-2':
                    page = 0.5;
                    break;
                case '/navigate/page-3':
                    page = 1.0;
                    break;
                }

                return page;

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
            // Sketch
            sketch(
                {
                    context,
                    canvas,
                    width,
                    height,
                }
            ) {

                const { OrbitControls } = require(
                          'three/examples/jsm/controls/OrbitControls'
                      )
                      , aspectRatio = width / height
                ;

                // Create a renderer
                const renderer = new THREE.WebGLRenderer(
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
                      , geometry = new THREE.PlaneBufferGeometry(
                          aspectRatio,
                          1,
                          45,
                          45,
                      )
                      // Materials
                      , material = new THREE.ShaderMaterial(
                          {
                              // transparent: true,
                              //   wireframe: true,
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

                camera.position.set(
                    0.3,
                    0,
                    - 1.5
                );

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
                        material.uniforms.page.value = this.pageValue;

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
