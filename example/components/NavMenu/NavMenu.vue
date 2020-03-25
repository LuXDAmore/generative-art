<template>
    <div class="nav-menu">

        <nav class="nav">
            <ul>
                <li v-for="link in links" :key="link.url">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>

        <nav class="nav nav-2">
            <ul>
                <li v-for="link in linksNavigate" :key="link.url">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'nav-menu',
        inheritAttrs: false,
        data: () => (
            {
                links: [
                    {
                        url: '/',
                        text: 'Homepage',
                    },
                    {
                        url: '/single/page-1',
                        text: 'Page 1',
                    },
                    {
                        url: '/single/page-2',
                        text: 'Page 2',
                    },
                    {
                        url: '/single/page-3',
                        text: 'Page 3',
                    },
                    {
                        url: '/single/page-4',
                        text: 'Page 4',
                    },
                    {
                        url: '/single/page-5',
                        text: 'Page 5',
                    },
                    {
                        url: '/single/page-6',
                        text: 'Page 6',
                    },
                    {
                        url: '/single/page-7',
                        text: 'Page 7',
                    },
                    {
                        url: '/single/page-8',
                        text: 'Page 8',
                    },
                    {
                        url: '/single/page-9',
                        text: 'Page 9',
                    },
                    {
                        url: '/single/page-10',
                        text: 'Page 10',
                    },
                ],
                linksNavigate: [
                    {
                        url: '/navigate/page-1',
                        text: 'Navigate 1',
                    },
                    {
                        url: '/navigate/page-2',
                        text: 'Navigate 2',
                    },
                    {
                        url: '/navigate/page-3',
                        text: 'Navigate 3',
                    },
                ],
            }
        ),
    };
</script>

<style
    scoped
    src="./style.css"
></style>
