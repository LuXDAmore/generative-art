<template>
    <div class="layout-error container text-center">

        <h1 align="center">
            C'è stato un errore imprevisto: <strong v-text="error.statusCode" />.
        </h1>

        <p
            v-if="error.message"
            v-text="error.message"
        />

        <nuxt-link
            to="/"
            title="go back to the homepage"
        >

            <strong>&#60; go back to the homepage</strong>

        </nuxt-link>

    </div>
</template>

<script>
    // Export
    export default {
        name: 'error',
        props: {
            error: {
                type: Object,
                required: true,
            },
        },
        computed: {
            is404() {

                return this.error && this.error.statusCode === 404;

            },
        },
        head() {

            if( ! this.is404 )
                return;

            return {
                title: `404 Pagina non trovata - NuxtJs || ThreeJs`,
                meta: [
                    {
                        hid: 'referrer',
                        name: 'referrer',
                        content: 'unsafe-url',
                    },
                ],
            };

        },
    };
</script>
