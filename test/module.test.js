import config from '../example/nuxt.config';

import { Nuxt, Builder } from 'nuxt';
import request from 'request-promise-native';
import getPort from 'get-port';

const BASE_URL = '/';

config.dev = false;
config.router.base = BASE_URL;

jest.setTimeout(
    60000
);

let nuxt
    , port
;

const url = path => `http://localhost:${ port }${ path }`
    , get = path => request(
        {
            url: url(
                path
            ),
        }
    )
;

describe(
    'nuxt',
    () => {

        beforeAll(
            async() => {

                nuxt = new Nuxt(
                    config
                );

                await nuxt.ready();

                await new Builder(
                    nuxt
                ).build();

                port = await getPort();

                await nuxt.listen(
                    port
                );

            }
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
