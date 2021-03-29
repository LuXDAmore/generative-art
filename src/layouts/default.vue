<template>
    <div class="layout">

        <nav-menu :key="`menu-${ $route.fullPath }`" />

        <nuxt :key="$route.fullPath" />

    </div>
</template>

<script>
    export default {
        name: 'default',
        components: {
            'nav-menu': () => import(
                '~/components/NavMenu'
            ),
        },
    };
</script>

<style
    scoped
    src="./shared.css"
></style>
