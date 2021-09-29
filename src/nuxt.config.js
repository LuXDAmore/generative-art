/*
*   * Requirements
*/
import { resolve } from 'path';
import * as PACKAGE from '../package.json';

/*
*   * Colors
*/
import { colors } from './theme';

/*
*   * Vars
*/
const isTesting = process.env.NODE_ENV === 'test'
    , isProduction = process.env.NODE_ENV !== 'development' && ! isTesting
    // Theme
    , { primary, error } = colors
    // Title and description
    , title = PACKAGE.name
    , description = PACKAGE.description
    , hostname = PACKAGE.homepage
    , keywords = PACKAGE.keywords.join(
        ','
    )
    , hostpath = hostname.replace(
        'https://luxdamore.github.io/',
        '/'
    )
    , author = PACKAGE.author
    // Url
    , base = (
        isProduction && hostpath
        ? `${ hostpath }/`
        : '/'
    )
    // Meta and Links
    , meta = [
        {
            once: true,
            hid: 'charset',
            charset: 'utf-8',
        },
        {
            once: true,
            hid: 'description',
            name: 'description',
            content: description,
        },
        {
            once: true,
            hid: 'keywords',
            name: 'keywords',
            content: keywords,
        },
        {
            once: true,
            hid: 'msapplication-tap-highlight',
            name: 'msapplication-tap-highlight',
            content: 'no',
        },
    ]
    , link = [
        {
            once: true,
            rel: 'shortcut icon',
            hid: 'favicon',
            type: 'image/x-icon',
            href: 'favicon.ico',
        },
    ]
    , script = []
    // Plugins and modules
    , plugins = [ '~/plugins/jsonld' ]
    , modules = [
        '@nuxtjs/component-cache',
        '@nuxtjs/browserconfig',
        '@nuxtjs/markdownit',
    ]
    , buildModules = [
        '@nuxt/typescript-build',
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        '@nuxtjs/pwa',
        'nuxt-compress',
        '@nuxtjs/sitemap',
    ]
    // Module file
    , module = [
        require(
            '../lib/module'
        ).default,
        { /* Custom configuration */ },
    ]
;

// FIXME: there's a problem during tests
! isTesting && buildModules.push(
    '@luxdamore/nuxt-humans-txt'
);

// Module installation
modules.push( module );

/* Analytics */
if( isProduction && process.env.GOOGLE_ANALYTICS_ID ) {

    link.push(
        {
            once: true,
            hid: 'preconnect-google-analytics',
            rel: 'preconnect',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
        {
            once: true,
            hid: 'prefetch-google-analytics',
            rel: 'dns-prefetch',
            href: 'https://www.google-analytics.com',
            crossorigin: true,
        },
    );

    buildModules.push(
        '@nuxtjs/google-analytics'
    );

}

/*
*   * Nuxt config
*/
export default {
    target: 'static',
    modern: true,
    components: false,
    features: {
        store: false,
        transition: false,
        validate: false,
        asyncData: true,
        fetch: false,
        clientOnline: false,
        clientPrefetch: false,
        componentAliases: false,
        componentClientOnly: false,
    },
    vueMeta: {
        refreshOnceOnNavigation: true,
    },
    /*
    *   * Directories
    */
    srcDir: __dirname,
    rootDir: resolve(
        __dirname,
        '..',
    ),
    buildDir: resolve(
        __dirname,
        '.nuxt',
    ),
    /*
    *   * Watch
    */
    watch: [ '~/../lib/**/*.*' ],
    /*
    *   * CSS
    */
    css: [
        'modern-normalize/modern-normalize.css',
        '~assets/styles/global.css',
        '~assets/styles/canvas.css',
    ],
    /*
    *   * Head meta
    */
    head: {
        title,
        titleTemplate: `%s - ${ description }`,
        htmlAttrs: {
            lang: 'en',
        },
        meta,
        link,
        script,
    },
    /*
    *   * Router
    */
    router: {
        base,
    },
    /*
    *   * Modules
    */
    plugins,
    modules,
    buildModules,
    browserconfig: {
        TileColor: primary,
        square150x150logo: {
            '@': {
                src: 'icon.png',
            },
        },
    },
    sitemap: {
        hostname,
        gzip: true,
    },
    pwa: {
        meta: {
            author,
            name: title,
            short_name: 'ART',
            description,
            ogHost: hostname,
            theme_color: primary,
            twitterCreator: '@luxdamore',
        },
        manifest: {
            lang: 'en',
            name: title,
            description,
        },
        icon: {
            fileName: 'icon.png',
            plugin: false,
        },
    },
    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },
    /*
    *   * Runtime Config
    */
    publicRuntimeConfig: {
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },
    privateRuntimeConfig: {
        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },
    /*
    *   * Progress bar
    */
    loading: {
        color: primary,
        failedColor: error,
        height: '16px',
    },
    /*
    *   * Render
    */
    render: {
        resourceHints: true,
        http2: {
            push: true,
        },
    },
    /*
    *   * Build
    */
    build: {
        /*
        *   * Optimizations
        */
        loaders: {
            vue: {
                compilerOptions: {
                    preserveWhitespace: false,
                    whitespace: 'condense',
                },
            },
        },
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
    },
    /*
    *   * Generate
    */
    generate: {
        fallback: true,
        dir: resolve(
            __dirname,
            '../docs'
        ),
    },
    /*
    *   * Vue
    */
    vue: {
        config: {
            productionTip: false,
        },
    },
    /*
    *   * Env
    */
    env: {
        title,
        description,
        keywords,
        hostname,
        author,
        base,
    },
    /*
    *   * Server
    */
    server: {
        host: '0.0.0.0',
    },
};
