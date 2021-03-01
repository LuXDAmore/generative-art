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
    };
</script>

<style
    scoped
    src="./style.css"
></style>
