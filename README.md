# 🎉 Generative Art || ThreeJs - Nuxt Canvas Sketch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Dependencies][dependencies-src]][dependencies-href]
[![Donate][donate-src]][donate-href]
[![Code Quality][quality-src]][quality-href]

[npm-version-src]: https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat
[npm-version-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[npm-downloads-src]: https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat
[npm-downloads-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[circle-ci-src]: https://img.shields.io/circleci/project/github/LuXDAmore/generative-art.svg?style=flat
[circle-ci-href]: https://circleci.com/gh/LuXDAmore/generative-art

[dependencies-src]: https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat
[dependencies-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[donate-src]: https://img.shields.io/badge/paypal-donate-black.svg?style=flat
[donate-href]: https://www.paypal.com/paypalme2/luxdamore

[quality-src]: https://img.shields.io/badge/code%20quality-A-informational?style=flat
[quality-href]: https://luxdamore.github.io/generative-art/

> Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [threejs and tensorflow are not included].

## 💘 Motivation

I'm introducing myself into the **Generative art**, **3D art**, **Visual design** and **Creative coding** worlds.

So, why i can't do this with my favorite libraries and framework?
Infact, this is also a module for [**NuxtJS**](https://nuxtjs.org/), it inject the [canvas-sketch](https://github.com/mattdesl/canvas-sketch) library with [`canvas-sketch-utils`](https://github.com/mattdesl/canvas-sketch-util) and [`load-asset`](https://github.com/mattdesl/load-asset) (from the creative coder [Matt DesLauriers](https://www.mattdesl.com/)).

After installation, you have access in NuxtJS (on the [client-side](https://nuxtjs.org/docs/2.x/directory-structure/plugins#client-or-server-side-only)) at two things, `$canvasSketch` (the main module, used internally) and at the method `$sketch` (it starts the sketch).

Check out the [example/pages](./example/pages) folder for some demos.
_Every page correspond to an example in the [main website](https://luxdamore.github.io/generative-art)_.

> N.B.: This is a _work-in-progress project_, I'm learning and testing new things here.

## Setup

1. Add `@luxdamore/nuxt-canvas-sketch` dependency to your project;
2. Inject `@luxdamore/nuxt-canvas-sketch` as a `modules` in your `nuxt.config.js`.

```bash

    # cmd
    yarn add @luxdamore/nuxt-canvas-sketch # or npm install --save @luxdamore/nuxt-canvas-sketch

```

```js

    // nuxt.config.js
    export default {

        // Module injection
        modules: [ '@luxdamore/nuxt-canvas-sketch' ],

        // Module configuration
        canvasSketch: {
            hideErrorsInConsole: false,
            hideGenericMessagesInConsole: false, // `true` in production
        },

    };

```

## Usage

> N.B. : I'm using the [sketchManager](https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#sketchmanager), because i think with VueJS it's the better way to remove and clean handlers during the destroy phase.

```html

    <template>
        <div class="canvas__container">

            <canvas ref="canvas" />

        </div>
    </template>

    <script>
        // Page, component or layout
        export default {
            data: () => (
                {
                    sketchManager: null,
                }
            ),
            async mounted() {

                try {

                    this.sketchManager = await this.$sketch(
                        // Settings of the sketch
                        {
                            maxPixelRatio: 3,
                            hotkeys: false,
                            // or you can pass a DOMElement document.querySelector( 'canvas' )
                            canvas: this.$refs.canvas,
                        },
                        // Method for the rendering
                        this.sketch,
                    );

                    // Ensure every listener is removed on-component-destoy
                    this.$once(
                        'hook:beforeDestroy',
                        () => this.sketchManager.unload()
                    );

                } catch( e ) {

                    console.error(
                        e
                    );

                }

            },
            methods: {
                sketch({ context }) {

                    // Here you start coding-art

                    return ({ context }) => {

                        // Here you can return some animated stuff

                    };

                },
            },
        };
    </script>

    <style scoped>
        canvas {

            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            display: block;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;

        }
    </style>

```

___

### Related things

#### ThreeJS

There are lots of examples using `threejs`, but it's not included, You can follow the examples and add it with:

```bash

    # cmd
    yarn add three # or npm install --save three

```

There si also a [ThreeJS starter template](https://luxdamore.github.io/generative-art/single/three-js-starter) for the plugin.

#### Tensorflow - Machine Learning and face recognition with Facemesh

[Facemesh by **Tensorflow**](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection) is not included, but you can follow the installation process [here](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#installation).

There si also an example with [ThreeJS and Tensorflow](https://luxdamore.github.io/generative-art/experiments/facemesh-with-machine-learning) for the plugin.

___

### Extra Resources

#### CanvaSketch

- [Documentation](https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md);
- [Api](https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md);
- [Examples](https://github.com/mattdesl/canvas-sketch/tree/master/examples).

#### ThreeJS and Shaders

- [The Book of Shaders](https://thebookofshaders.com/);
- [Three.js Fundamentals](https://thebookofshaders.com/).

#### Videos about creative coding and 3D art

- [Matt DesLauriers](https://github.com/mattdesl).
- [Yuri Artyukh](https://www.youtube.com/channel/UCDo7RTzizoOdPjY8A-xDR7g);
- [The Art of Code](https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg);
- [Tim Rodenbröker](https://www.youtube.com/channel/UCPwg5nDMQWzkAfb56_GvGpA);
- [SimonDev](https://www.youtube.com/channel/UCEwhtpXrg5MmwlH04ANpL8A);
- [Interactive Developer](https://www.youtube.com/channel/UCdeWxKJuvtUG2xyN6pOJEvA).

___

## Development

1. Clone this repository;
2. Install dependencies using `yarn install` or `npm install`;
3. Start development server using `yarn dev` or `npm run dev`.

> To access camera and/or microphone from localhost, you need to enable _[Unsecure Origins in Chrome](https://medium.com/@Carmichaelize/enabling-the-microphone-camera-in-chrome-for-local-unsecure-origins-9c90c3149339)_.

## 🐞 Issues

Please make sure to read the [Issue Reporting Checklist](./.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## 👥 Contribution

Please make sure to read the [Contributing Guide](./.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## 📖 Changelog

Details changes for each release are documented in the [**release notes**](./CHANGELOG.md) file.

### 📃 License

[MIT License](./LICENSE) // Copyright (©) 2020-present [Luca Iaconelli](https://lucaiaconelli.it)

___

#### 💸 Are you feeling generous today?  :)

If You want to share a beer, we can be really good friends 😻

__[Paypal](https://www.paypal.me/luxdamore) // [Patreon](https://www.patreon.com/luxdamore)__

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/luxdamore)

> _It's always a good day to be magnanimous_ - cit

#### 💼 Hire me

[![Hire me](https://img.shields.io/badge/Contact%20Me-Let's%20Talk-informational?style=social&logo=minutemailer)](https://lucaiaconelli.it)

#### 💘 Inspired by

> **All my thanks goes to _Matt DesLauriers_ and _Yuri Artyukh_ for those useful libraries and tutorials**.
