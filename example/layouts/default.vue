<template>
    <div class="layout">

        <nav class="nav">
            <ul>
                <li v-for="link in links" :key="link.url">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>

        <nuxt :key="$route.fullPath" />

    </div>
</template>

<script>
    export default {
        name: 'default',
        data: () => (
            {
                links: [
                    {
                        url: '/',
                        text: 'Homepage',
                    },
                    {
                        url: '/page-1',
                        text: 'Page 1',
                    },
                    {
                        url: '/page-2',
                        text: 'Page 2',
                    },
                    {
                        url: '/page-3',
                        text: 'Page 3',
                    },
                    {
                        url: '/page-4',
                        text: 'Page 4',
                    },
                    {
                        url: '/page-5',
                        text: 'Page 5',
                    },
                    {
                        url: '/page-6',
                        text: 'Page 6',
                    },
                    {
                        url: '/page-7',
                        text: 'Page 7',
                    },
                    {
                        url: '/page-8',
                        text: 'Page 8',
                    },
                    {
                        url: '/page-9',
                        text: 'Page 9',
                    },
                    {
                        url: '/page-10',
                        text: 'Page 10',
                    },
                ],
            }
        ),
    };
</script>

<style scoped>

    .layout::before {

        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        display: block;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 10px;
        color: #fff;
        background-color: #333;
        content: "";

    }

    .nav {

        position: fixed;
        bottom: 0;
        z-index: 1;

    }

    .layout {

        min-height: 100vh;

    }

    .layout,
    .layout a {

        color: #fff;

    }
</style>
