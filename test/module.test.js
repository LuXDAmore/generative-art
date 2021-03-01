/*
*   * Test utils
*/
import { setupTest, get } from '@nuxt/test-utils';

/*
*   * Package data
*/
import * as PACKAGE from '../package.json';

/*
*   * Utils
*/
const BASE_URL = PACKAGE.homepage.replace(
    'https://luxdamore.github.io/',
    '/'
);

/*
*   * Module testing suite
*/
describe(
    'module',
    () => {

        /*
        *   * Nuxt setup
        */
        setupTest(
            {
                server: true,
                setupTimeout: 180000,
                testDir: __dirname,
                fixture: '../src',
                config: {
                    dev: false,
                },
            }
        );

        /*
        *   * Tests
        */
        describe(
            'render',
            () => {

                test(
                    'run',
                    async() => {

                        const { body } = await get(
                            BASE_URL
                        );

                        expect( body ).toContain(
                            'Generative'
                        );

                    },
                );

            }
        );

    }
);
