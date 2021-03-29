<template>
    <main class="container">
        <h2 class="absolute z-index--1">
            <nuxt-link to="/navigate/page-1" title="go to page GrayKlein Geometry">
                <em>go to <strong>GrayKlein Geometry</strong></em>
            </nuxt-link>
        </h2>
    </main>
</template>

<script>
    // Page
    export default {
        name: 'page-navigate-2',
        layout: 'navigate', // -> The sketch is in the layout
    };
</script>
