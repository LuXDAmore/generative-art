import { loadNuxt } from 'nuxt';
import request from 'request-promise-native';

import config from '../example/nuxt.config';

const BASE_URL = '/';

config.dev = false;
config.router.base = BASE_URL;
config.server.host = 'localhost';
config.server.port = 9999;

jest.setTimeout(
    60000
);

let nuxt;

const url = path => `http://${ config.server.host }:${ config.server.port }${ path }`
    , get = path => request(
        url(
            path
        )
    )
;

describe(
    'nuxt',
    () => {

        beforeAll(
            async() => {

                nuxt = await loadNuxt(
                    config
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
