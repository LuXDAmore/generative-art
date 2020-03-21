import { resolve } from 'path';
import * as PACKAGE from '../package.json';

// Var
const moduleFile = resolve(
        __dirname,
        '../lib/module'
    )
    , base = (
        process.env.NODE_ENV === 'production'
        ? `${
            PACKAGE.homepage.replace(
                'https://luxdamore.github.io',
                ''
            )
        }/`
        : '/'
    )
    , meta = [
        {
            once: true,
            hid: 'description',
            name: 'description',
            content: PACKAGE.description,
        },
    ]
    , links = [
        {
            once: true,
            hid: 'favicon',
            rel: 'shortcut icon',
            type: 'image/x-icon',
            href: `${ base }favicon.ico`,
        },
        {
            once: true,
            hid: 'humans',
            rel: 'author',
            type: 'text/plain',
            href: `${ base }humans.txt`,
        },
    ]
;

// Nuxt config
export default {
    modern: true,
    css: [
        'modern-normalize/modern-normalize.css',
        '~assets/style.css',
        '~assets/canvas.css',
    ],
    srcDir: __dirname,
    rootDir: resolve(
        __dirname,
        '..',
    ),
    buildDir: resolve(
        __dirname,
        '.nuxt',
    ),
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: PACKAGE.name,
        meta,
        links,
    },
    /*
     * Plugins
     */
    plugins: [ '~/plugins/jsonld' ],
    /*
     * Modules
     */
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/markdownit',
        moduleFile,
    ],
    /*
     * buildModules
     */
    buildModules: [ 'nuxt-compress' ],
    /*
     * Watch module
     */
     watch: [ moduleFile ],
    /*
     * Router
     */
    router: {
        base,
    },
    /*
     * Build
     */
    build: {
        babel: {
            presets: (
                { isServer }
            ) => (
                [
                    [
                        require.resolve(
                            '@nuxt/babel-preset-app'
                        ),
                        {
                            buildTarget: isServer ? 'server' : 'client',
                            corejs: {
                                version: 3,
                            },
                        },
                    ],
                ]
            ),
        },
        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false,
                    whitespace: 'condense',
                },
            },
        },
        /*
         ** PostCSS
         */
        postcss: {
            plugins: {
                'postcss-import': {},
                'postcss-url': {},
                'postcss-scoped': {},
                'postcss-preset-env': this.preset,
                'postcss-combine-duplicated-selectors': {
                    removeDuplicatedProperties: true,
                },
                cssnano: {
                    preset: 'default',
                },
            },
            preset: {
                stage: 2,
                autoprefixer: {
                    cascade: false,
                    grid: true,
                },
            },
        },
        /*
         ** Minifier
         */
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                collapseInlineTagWhitespace: true,
                removeOptionalTags: true,
                removeAttributeQuotes: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeComments: true,
                continueOnParseError: true,
            },
        },
        /*
         ** Run lint on save
         */
        extend(
            config,
            {
                isDev,
                isClient,
            },
        ) {

            /*
             ** ESLint loaded
             */
            isDev && isClient && config.module.rules.push(
                {
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                },
            );

        },
    },
    /*
     * Generate
     */
    generate: {
        dir: resolve(
            __dirname,
            '../docs'
        ),
    },
    /*
     * Env
     */
    env: {
        package: PACKAGE,
        base,
    },
    /*
     * Server
     */
    server: {
        host: '0.0.0.0',
    },
};
