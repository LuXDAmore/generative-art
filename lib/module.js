import path from 'path';
import * as PACKAGE from '../package.json';
import defaultConfig from './config';

import log from './logger';

// Options
const moduleName = 'canvas-sketch'
    , logger = log(
        `nuxt:${ moduleName }`,
    )
;

export default function(
    moduleOptions,
) {

    const options = {
        ... defaultConfig,
        hideGenericMessagesInConsole: ! this.options.dev,
        ... moduleOptions || {},
        ... this.options[ moduleName ] || {},
        ... this.options.generativeArt || {},
    };

    this.extendBuild(
        config => {

            // FIXME: Check if already exist
            config.module.rules.push(
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    exclude: /(node_modules)/,
                    use: [
                        'raw-loader',
                        'glslify-loader',
                    ],
                },
                {
                    test: /\.(obj)$/,
                    exclude: /(node_modules)/,
                    use: 'webpack-obj-loader',
                },
            );

        }
    );

    this.addPlugin(
        {
            src: path.resolve(
                __dirname,
                'plugin.client.js'
            ),
            mode: 'client',
            options: options.sketch,
        }
    );

    ! options.hideGenericMessagesInConsole && logger.info(
        '\x1B[32m%s\x1B[0m',
        moduleName,
        'Canvas-sketch correctly injected',
    );

}

const meta = PACKAGE;

export { meta };
