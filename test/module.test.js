/*
*   * Test utils
*/
import { setupTest } from '@nuxt/test-utils';

/*
*   * Module testing suite
*/
describe(
    'module',
    () => {

        /*
        *   * Nuxt setup and test
        */
        setupTest(
            {
                server: true,
                setupTimeout: 230000,
                testDir: __dirname,
                fixture: '../src',
                config: {
                    dev: false,
                },
            }
        );

    }
);
