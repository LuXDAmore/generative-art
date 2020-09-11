// Test utils
import {
    setup,
    get,
} from '@nuxtjs/module-test-utils';

// Nuxt config
import config from '../example/nuxt.config';

const BASE_URL = '/';

config.dev = false;
config.router.base = BASE_URL;

// Tests
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

            },
            60000
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
                    'Generative Art'
                );

            },
            60000
        );

    }
);
