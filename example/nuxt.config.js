// Node
import { resolve } from 'path';

// Env
import dotenv from 'dotenv';
import * as PACKAGE from '../package.json';

// Vars
const ENV = dotenv
        .config(
            {
                path: resolve(
                    __dirname,
                    '.env',
                ),
            }
        )
        .parsed || {}
    // Module
    , IS_PROD = process.env.NODE_ENV === 'production'
    , moduleFile = resolve(
        __dirname,
        '../lib/module'
    )
    , base = (
        IS_PROD
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
        {
            once: true,
            hid: 'keywords',
            name: 'keywords',
            content: PACKAGE.keywords.join(
                ','
            ),
        },
    ]
    , link = [
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
    , script = []
    , __dangerouslyDisableSanitizersByTagID = {}
    , modules = [
        '@nuxtjs/pwa',
        '@nuxtjs/markdownit',
        moduleFile,
    ]
    , buildModules = [
        '@nuxtjs/dotenv',
        'nuxt-compress',
        '@nuxtjs/sitemap',
    ]
;

// GTM
if( IS_PROD && ENV.ANALYTICS_ID ) {

    link.push(
        {
            once: true,
            hid: 'preconnect-jsdelivr',
            rel: 'preconnect',
            href: 'https://cdn.jsdelivr.net',
            crossorigin: true,
        },
    );

    link.push(
        {
            once: true,
            hid: 'preconnect-google-tagmanager',
            rel: 'preconnect',
            href: 'https://www.googletagmanager.com',
            crossorigin: true,
        },
    );

    link.push(
        {
            once: true,
            hid: 'prefetch-google-tagmanager',
            rel: 'dns-prefetch',
            href: 'https://www.googletagmanager.com',
            crossorigin: true,
        },
    );

    link.push(
        {
            once: true,
            hid: 'preconnect-google-analytics',
            rel: 'preconnect',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
    );

    link.push(
        {
            once: true,
            hid: 'prefetch-google-analytics',
            rel: 'dns-prefetch',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
    );

    script.push(
        {
            once: true,
            hid: 'google-tag-manager-inner-html',
            innerHTML: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({originalLocation:document.location.protocol+'//'+document.location.hostname+document.location.pathname+document.location.search});`,
        },
    );

    __dangerouslyDisableSanitizersByTagID[ 'google-tag-manager-inner-html' ] = [ 'innerHTML' ];

    buildModules.push(
        [
            '@nuxtjs/google-analytics',
            {
                id: ENV.ANALYTICS_ID,
            },
        ],
    );

}

// Nuxt config
export default {
    modern: true,
    components: false,
    features: {
        transitions: false,
        validate: false,
    },
    vueMeta: {
        refreshOnceOnNavigation: true,
    },
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
        title: `${ ENV.TITLE || '' } - ${ PACKAGE.name }`,
        meta,
        link,
        script,
        __dangerouslyDisableSanitizersByTagID,
    },
    /*
    ** Plugins
    */
    plugins: [ '~/plugins/jsonld' ],
    /*
    ** Modules
    */
    modules,
    sitemap: {
        hostname: PACKAGE.homepage,
        gzip: true,
    },
    /*
    ** buildModules
    */
    buildModules,
    /*
    ** Watch module
    */
    watch: [ '../lib/**/*.*' ],
    /*
    ** Router
    */
    router: {
        base,
    },
    /*
    ** Build
    */
    build: {
        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false,
                    whitespace: 'condense',
                },
            },
        },
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
        },
        babel: {
            presets: (
                _,
                [
                    preset,
                    options,
                ]
            ) => [
                [
                    preset,
                    {
                        ... options,
                        corejs: {
                            ... ( options.corejs || {} ),
                            version: 3,
                        },
                    },
                ],
            ],
        },
        postcss: {
            parser: 'postcss-scss',
            syntax: 'postcss-scss',
            plugins: {
                'postcss-import': {},
                'postcss-url': {},
                'postcss-scoped': {},
                'postcss-preset-env': ( this ? ( this.preset || {} ) : {} ),
                'postcss-combine-duplicated-selectors': {
                    removeDuplicatedValues: true,
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
    ** Render
    */
    render: {
        resourceHints: true,
        http2: {
            push: true,
        },
    },
    /*
    ** Vue
    */
    vue: {
        config: {
            productionTip: false,
        },
    },
    /*
    ** Generate
    */
    generate: {
        dir: resolve(
            __dirname,
            '../docs'
        ),
    },
    /*
    ** Env
    */
    env: {
        ... ENV,
        package: PACKAGE,
        base,
    },
    /*
    ** Server
    */
    server: {
        host: '0.0.0.0',
    },
};
