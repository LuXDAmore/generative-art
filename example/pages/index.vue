<template>
    <main class="container readme canvas-container">

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
    };
</script>

<style src="highlight.js/styles/github.css"></style>
<style src="github-markdown-css/github-markdown.css"></style>
