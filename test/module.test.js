import {
    setup,
    get,
} from '@nuxtjs/module-test-utils';

import config from '../example/nuxt.config';

const BASE_URL = '/';

config.dev = false;
config.router.base = BASE_URL;
config.server.host = 'localhost';

describe(
    'module',
    () => {

    let nuxt;

    beforeAll(
        async() => {

            (
                { nuxt } = (
                    await setup(
                        config
                    )
                )
            );

        },
        60000
    );

    afterAll(
        async() => {

            await nuxt.close();

        }
    );

    test(
        'render',
        async() => {

            const html = await get(
                BASE_URL
            );

            expect(
                html
            ).toContain(
                'Generative'
            );

        }
    );

    }
);
