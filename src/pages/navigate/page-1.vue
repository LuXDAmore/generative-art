<template>
    <main class="container">
        <h2 class="absolute z-index--1">
            <nuxt-link to="/navigate/page-2">
                <em>go to page <strong>Sphere Geometry</strong></em>
            </nuxt-link>
        </h2>
    </main>
</template>

<script>
    // Page
    export default {
        name: 'page-navigate-1',
        layout: 'navigate', // -> The sketch is in the layout
    };
</script>
