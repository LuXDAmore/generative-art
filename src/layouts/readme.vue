<template>
    <div class="layout layout-readme">

        <nav-menu />

        <nuxt />

    </div>
</template>

<script>
    export default {
        name: 'readme',
        components: {
            'nav-menu': () => import(
                '~/components/NavMenu'
            ),
        },
        jsonld() {

            return {
                '@context': 'https://schema.org/',
                '@type': 'SoftwareSourceCode',
                programmingLanguage: 'Javascript',
                targetProduct: 'NuxtJs, VueJs',
                name: process.env.title,
                description: process.env.description,
                about: process.env.description,
                author: process.env.author,
                url: process.env.hostname,
                codeSampleType: process.env.hostname,
                workExample: process.env.hostname,
                codeRepository: process.env.hostname,
            };

        },
    };
</script>

<style
    scoped
    src="./shared.css"
></style>
