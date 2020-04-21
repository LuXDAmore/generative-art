<template>
    <main class="container readme">

        <article
            class="markdown-body"
            v-html="readme"
        />

    </main>
</template>

<script>
    // Highlight
    import hljs from 'highlight.js/lib/highlight';
    import bash from 'highlight.js/lib/languages/bash';
    import javascript from 'highlight.js/lib/languages/javascript';

    // Readme
    import readme from '~/../README.md';

    // Highlight config
    hljs.registerLanguage(
        'bash',
        bash,
    );

    hljs.registerLanguage(
        'javascript',
        javascript,
    );

    // Page
    export default {
        name: 'homepage',
        computed: {
            readme: () => readme,
        },
        mounted() {

            this.$nextTick(
                () => {

                    this.initHighlight();
                    this.initReadmeLinks();

                },
            );

        },
        methods: {
            initHighlight() {

                [
                    ... document.querySelectorAll(
                        'pre',
                    ),
                ].forEach(
                    block => hljs.highlightBlock(
                        block,
                    ),
                );

            },
            initReadmeLinks() {

                const links = [
                          ... document.querySelectorAll(
                              '.readme > article a, .readme > article pre',
                          ),
                      ].filter(
                          (
                              { tagName }
                          ) => tagName === 'A'
                      )
                      , BASE_URL = process.env.package.repository.url.replace(
                          '.git',
                          '/tree/master/'
                      )
                ;

                for( let i = 0; i < links.length; i ++ ) {

                    links[ i ].setAttribute(
                        'target',
                        '_blank',
                    );

                    links[ i ].setAttribute(
                        'rel',
                        'noopener',
                    );

                    links[ i ].setAttribute(
                        'title',
                        links[ i ].textContent,
                    );

                    const HREF = links[ i ].getAttribute(
                        'href'
                    );

                    if(
                        HREF.startsWith(
                            './'
                        )
                    ) {

                        links[ i ].setAttribute(
                            'href',
                            HREF.replace(
                                './',
                                BASE_URL
                            )
                        );

                    }

                }

            },
        },
        head() {

            return {
                link: [
                    {
                        once: true,
                        hid: 'preload-badge-npm-v',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat-square',
                    },
                    {
                        once: true,
                        hid: 'preload-badge-npm-dt',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square',
                    },
                    {
                        once: true,
                        hid: 'preload-badge-circleci',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/circleci/build/github/LuXDAmore/generative-art.svg?style=flat-square',
                    },
                    {
                        once: true,
                        hid: 'preload-badge-dependencies',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat-square',
                    },
                    {
                        once: true,
                        hid: 'preload-badge-npm',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/npm/l/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square',
                    },
                    {
                        once: true,
                        hid: 'preload-badge-paypal',
                        rel: 'preload',
                        as: 'image',
                        href: 'https://img.shields.io/badge/paypal-donate-black.svg?style=flat-square',
                    },
                ],
            };

        },
    };
</script>

<style src="highlight.js/styles/github.css"></style>
<style src="github-markdown-css/github-markdown.css"></style>

<style scoped>
    .markdown-body {

        width: 736px;
        max-width: 100%;
        padding: 0 36px;
        line-height: 1.5;
        background-color: #fff;

    }

    .markdown-body ::v-deep pre code .hljs-comment,
    .markdown-body ::v-deep pre code .hljs-attr,
    .markdown-body ::v-deep pre code .hljs-built_in, /* stylelint-disable-line */
    .markdown-body ::v-deep pre code .hljs-variable,
    .markdown-body ::v-deep pre code .hljs-quote {

        color: #900;

    }

    .markdown-body ::v-deep pre code .hljs-number,
    .markdown-body ::v-deep pre code .hljs-literal,
    .markdown-body ::v-deep pre code .hljs-tag .hljs-attr {

        color: #035e21;

    }

    .markdown-body ::v-deep pre code {

        max-width: none;

    }
</style>
