<template>
    <header class="nav-menu">

        <details class="nav-menu__details father" open>

            <summary class="nav-menu__summary">
                <small>
                    Menu
                </small>
            </summary>

            <details v-if="links.length" class="nav-menu__details">

                <summary class="nav-menu__summary">
                    <h2>
                        Single pages
                    </h2>
                </summary>

                <nav class="nav">
                    <ul>
                        <li
                            v-for="link in links"
                            :key="link.url"
                            :class="link.class"
                        >
                            <nuxt-link
                                :to="link.url"
                                :title="link.text"
                                v-text="link.text"
                            />
                        </li>
                    </ul>
                </nav>

            </details>

            <details v-if="linksNavigate.length" class="nav-menu__details">

                <summary class="nav-menu__summary">
                    <h2>
                        Layouts
                    </h2>
                </summary>

                <nav class="nav">
                    <ul>
                        <li
                            v-for="link in linksNavigate"
                            :key="link.url"
                            :class="link.class"
                        >
                            <nuxt-link
                                :to="link.url"
                                :title="link.text"
                                v-text="link.text"
                            />
                        </li>
                    </ul>
                </nav>

            </details>

            <details v-if="linksExperiments.length" class="nav-menu__details">

                <summary class="nav-menu__summary">
                    <h2>
                        Experiments
                    </h2>
                </summary>

                <nav class="nav">
                    <ul>
                        <li
                            v-for="link in linksExperiments"
                            :key="link.url"
                            :class="link.class"
                        >
                            <nuxt-link
                                :to="link.url"
                                :title="link.text"
                                v-text="link.text"
                            />
                        </li>
                    </ul>
                </nav>

            </details>

        </details>

    </header>
</template>

<script>
    export default {
        name: 'nav-menu',
        inheritAttrs: false,
        data: () => (
            {
                hideMenu: false,
                links: [
                    {
                        url: '/',
                        text: 'HOMEPAGE, README',
                        class: [ 'font-bold' ],
                    },
                    {
                        url: '/single/three-js-starter',
                        text: 'ThreeJs starter template',
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
                        url: '/single/generative-art-1',
                        text: 'Generative Art 1',
                    },
                    {
                        url: '/single/page-6',
                        text: 'Page 6',
                    },
                    {
                        url: '/single/microphone-audio-and-video-webcam',
                        text: 'Microphone audio and video webcam',
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
                    {
                        url: '/single/page-11',
                        text: 'Page 11',
                    },
                    {
                        url: '/single/infinite-animation',
                        text: 'Infinite animation',
                    },
                ],
                linksNavigate: [
                    {
                        url: '/navigate/page-1',
                        text: 'GrayKlein Geometry',
                    },
                    {
                        url: '/navigate/page-2',
                        text: 'Sphere Geometry',
                    },
                ],
                linksExperiments: [
                    {
                        url: '/experiments/tensorflow-facemesh',
                        text: 'Tensorflow Facemesh',
                    },
                ],
            }
        ),
        jsonld() {

            return [
                {
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
                },
                {
                    '@context': 'http://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        ... this.links,
                        ... this.linksNavigate,
                        ... this.linksExperiments,
                    ].map(
                        (
                            item,
                            index,
                        ) => (
                            {
                                '@type': 'ListItem',
                                position: index + 1,
                                item: {
                                    '@id': item.url,
                                    url: item.url,
                                    name: item.text || item.title,
                                },
                            }
                        ),
                    ),
                },
            ];

        },
    };
</script>

<style
    scoped
    src="./style.css"
></style>
