# 🎉 Generative art with Nuxt Canvas Sketch

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Dependencies][dependencies-src]][dependencies-href]
[![License][license-src]][license-href]
[![Donate][donate-src]][donate-href]

[npm-version-src]: https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[npm-downloads-src]: https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[circle-ci-src]: https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-canvas-sketch.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/LuXDAmore/nuxt-canvas-sketch

[dependencies-src]: https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat-square
[dependencies-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[license-src]: https://img.shields.io/npm/l/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square
[license-href]: https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch

[donate-src]: https://img.shields.io/badge/paypal-donate-black.svg?style=flat-square
[donate-href]: https://www.paypal.com/paypalme2/luxdamore

> Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module to make it easy to do.

## 💘 Motivation

I'm introducing myself to the **generative-art** world, so, why not doing this with my favorite libraries and framework?

So, this is also a module for Nuxt, it simply inject the [canvas-sketch](https://github.com/mattdesl/canvas-sketch) library (there are more packages you can use installing this, for example `canvas-sketch-utils`).

After installing this, you have access in Nuxt (client-side) at two things, `$canvasSketch` (the main module, used internally) and at the method `$draw` (it start the sketch).

Check the `example/` folder and take a look at `page-*.vue` for some examples.
Every page correspond to an example in the [main website](https://luxdamore.github.io/generative-art).

## Setup

1. Add `@luxdamore/nuxt-canvas-sketch` dependency to your project;
2. Add `@luxdamore/nuxt-canvas-sketch` in the `modules` section of your `nuxt.config.js`;

```bash

    yarn add @luxdamore/nuxt-canvas-sketch # or npm install --save @luxdamore/nuxt-canvas-sketch

```

## Configuration

**_N.B. : the config is only shallow merged, not deep merged._**

- [canvas-sketch documentation](https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md);
- [canvas-sketch api](https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md);
- [canvas-sketch examples](https://github.com/mattdesl/canvas-sketch/tree/master/examples).

```js

    // nuxt.config.js
    export default {

        // Module installation
        modules: [ '@luxdamore/nuxt-canvas-sketch' ],

        // Module config
        canvasSketch: {
            hideErrorsInConsole: false,
            hideGenericMessagesInConsole: false, // Disabled in production
        },

    };

```

## Usage

```javascript

    export default {
        data: () => (
            {
                drawManager: null,
            }
        ),
        mounted() {

            // Suggested way
            try {

                this.drawManager = await this.$sketch(
                    // Settings of the sketch
                    {
                        animate: true,
                        hotkeys: false,  // <-- the only default value passed
                        // <canvas ref="canvas" /> or you can pass a DOMCanvas element document.querySelector( 'canvas' )
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

            this.drawManager && this.drawManager.unload();

        },
        methods: {
            sketch({ context }) {

                // Here you start coding-art

                return ({ context }) => {

                    // Here you can return an animation

                };

            },
        },
    };

```

**_N.B. : You don't really need the `drawManager`, but i think with Vue it's a better way to remove an clean handlers onBeforeDestroy.._**
___

## Development

1. Clone this repository;
2. Install dependencies using `yarn install` or `npm install`;
3. Start development server using `yarn dev` or `npm run dev`.

## 🐞 Issues

Please make sure to read the [Issue Reporting Checklist](/.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## 👥 Contribution

Please make sure to read the [Contributing Guide](/.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## 📖 Changelog

Details changes for each release are documented in the [**release notes**](./CHANGELOG.md).

### 📃 License

[MIT License](./LICENSE) // Copyright (©) 2019-present [Luca Iaconelli](https://lucaiaconelli.it)

#### 💸 Are you feeling generous today?  :)

Do you want to share a beer? We can be good friends.. __[Paypal](https://www.paypal.me/luxdamore) // [Patreon](https://www.patreon.com/luxdamore)__

> _It's always a good day to be magnanimous - cit_

#### 💼 Hire me

[![Contacts](https://img.shields.io/badge/email-Contact%20me-success)](https://lucaiaconelli.it)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/luxdamore)

#### 💘 Inspired by

> **All my thanks goes to Matt DesLauriers for these beautiful and easy to use libraries**.

___

##### ✔ TODO

> Just asking myself if i should do more.

- Add tests;
- Check compatibility with P5 (actually not working);
- More config options?
