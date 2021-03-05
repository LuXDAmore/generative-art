# 🌈🎨 Generative Art || Nuxt Canvas Sketch (three.js, tensorflow.js and gsap)

[![Code Quality][quality-src]][quality-href]
[![Downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][dependencies-src]][dependencies-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Version][npm-version-src]][npm-version-href]
[![Donate][paypal-donate-src]][paypal-donate-href]

[quality-src]: https://img.shields.io/badge/code%20quality-A-informational?style=flat
[quality-href]: https://luxdamore.github.io/generative-art/

[npm-downloads-src]: https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat&color=darkgreen
[npm-downloads-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[dependencies-src]: https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat
[dependencies-href]: https://npmjs.com/package/@luxdamore/generative-art

[circle-ci-src]: https://img.shields.io/circleci/project/github/LuXDAmore/generative-art.svg?style=flat&color=darkgreen
[circle-ci-href]: https://circleci.com/gh/LuXDAmore/generative-art

[npm-version-src]: https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat&color=darkorange&label=version
[npm-version-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[paypal-donate-src]: https://img.shields.io/badge/paypal-donate-black.svg?style=flat
[paypal-donate-href]: https://www.paypal.me/luxdamore
[patreon-donate-href]: https://www.patreon.com/luxdamore
[kofi-donate-href]: https://ko-fi.com/luxdamore

> Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].

## 💘 Motivation

I'm introducing myself into the **Generative art**, **3D art**, **Visual design** and **Creative coding** worlds.

So, why i can't do this with my favorite libraries and framework?
Infact, this is also a module for [**NuxtJS**](https://nuxtjs.org/), it inject the [canvas-sketch](https://github.com/mattdesl/canvas-sketch) library with [`canvas-sketch-utils`](https://github.com/mattdesl/canvas-sketch-util) and [`load-asset`](https://github.com/mattdesl/load-asset) (from the creative coder [Matt DesLauriers](https://www.mattdesl.com/)).

After installation, you have access in NuxtJS (on the [client-side](https://nuxtjs.org/docs/2.x/directory-structure/plugins#client-or-server-side-only)) at two things, `$canvasSketch` (the main module, used internally) and at the method `$sketch` (it starts the sketch).

Check out the [src/pages](./src/pages) folder for some demos.
_Every page correspond to an example in the [main website](https://luxdamore.github.io/generative-art)_.

> N.B.: This is a _work-in-progress project_, I'm learning and testing new things here.
___

## Setup

1. **Install** `@luxdamore/nuxt-canvas-sketch` as a dependency:
   - `yarn add @luxdamore/nuxt-canvas-sketch`;
   - or, `npm install --save @luxdamore/nuxt-canvas-sketch`;
2. **Append** `@luxdamore/nuxt-canvas-sketch` to the `modules` array of your `nuxt.config.js`.

## Configuration

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

> I'm using the [sketchManager](https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#sketchmanager), because i think with **VueJS** it's the better way to remove and clean handlers during the destroy phase.

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
                            // or you can pass a DOMCanvasElement ex.
                            // document.querySelector( 'canvas' )
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

There are lots of examples based on [`threejs`](https://threejs.org/), but it's not included, You can install the library with:

```bash

    # cmd
    yarn add three # or npm install --save three

```

_There si also a [ThreeJS starter template](https://luxdamore.github.io/generative-art/single/three-js-starter) based on the plugin._

#### Gsap (GreenSock)

There are some examples based on the [`gsap` library](https://greensock.com/), but it's not included, You can install the library with:

```bash

    # cmd
    yarn add gsap # or npm install --save gsap

```

_Check the [layout navigation example](https://luxdamore.github.io/generative-art/navigate/page-1)._

#### Tensorflow - Machine Learning and face recognition with Facemesh

[TensorFlow.js](https://www.tensorflow.org/js) and [Facemesh](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection) are not included, but you can follow the installation process [here](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#installation):

```bash

    # cmd
    yarn add @tensorflow/tfjs-backend-cpu @tensorflow/tfjs-converter @tensorflow/tfjs-core # or npm install --save @tensorflow/tfjs-backend-cpu @tensorflow/tfjs-converter @tensorflow/tfjs-core

```

There si also an example with [ThreeJS and Tensorflow](https://luxdamore.github.io/generative-art/experiments/facemesh-with-machine-learning) based on the plugin.

___

### Extra Resources

#### CanvasSketch

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

## 👩🏻‍💻👨🏻‍💻 Development

1. **Clone** the repository:
   - `git clone https://github.com/LuXDAmore/generative-art.git`;
2. **Install** dependencies:
   - `yarn install` (or `npm install`);
3. **Start** a development server:
   - `yarn dev` (or `npm run dev`);
4. **Test** your code:
   - `yarn test` (or `npm run test`);
5. **Extra**, generate the documentation ([*Github Pages*](https://pages.github.com/)):
   - `yarn generate` (or `npm run generate`);
   - _the content is automatically generated into the `/docs` folder_.

## 🐞 Issues

Please make sure to read the [**issue reporting checklist**](./.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue.
*Issues not conforming to the guidelines may be closed immediately*.

## 📝 Discussions

We're using [**Github discussions**](https://github.com/LuXDAmore/generative-art/discussions) as a place to connect with other members of our community.
*You are free to ask questions and share ideas, so enjoy yourself*.

## 👥 Contribution

Please make sure to read the [**contributing guide**](./.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## 📖 Changelog

Details changes for each release are documented in the [**release notes**](./CHANGELOG.md).

### 🆓 License

[MIT License](./LICENSE) // Copyright (©) 2019-now [Luca Iaconelli](https://lucaiaconelli.it)

#### 💼 Hire me

[![Contacts](https://img.shields.io/badge/Contact%20Me-Let's%20Talk-informational?style=social&logo=minutemailer)](https://curriculumvitae.lucaiaconelli.it)

#### 💸 Are you feeling generous today?

If You want to share a beer, we can be really good friends 😄

__[Paypal][paypal-donate-href] // [Patreon][patreon-donate-href] // [Ko-fi][kofi-donate-href]__

> ☀ _It's always a good day to be magnanimous_ - cit.

___

#### 💘 Inspired by

> **All my thanks goes to _Matt DesLauriers_ and _Yuri Artyukh_ for those useful libraries and tutorials**.
