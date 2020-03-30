#pragma vscode_glsllint_stage : frag

precision mediump float;

uniform float page;

varying vec2 vUv;
varying vec3 vNormal;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {

    return a + b * cos( 6.28318 * ( c * t + d ) );

}


void main () {

    float diff = abs(
        dot(
            normalize(
                vec3(
                    1.,
                    1.,
                    1.
                )
            ),
            vNormal
        )
    );

    // Colors
    // https://iquilezles.org/www/articles/palettes/palettes.htm
    vec3 a = vec3( .8, page, page );
    vec3 b = vec3( .2, .4, .2 );
    vec3 c = vec3( 2., page, page );
    vec3 d = vec3( 1., .25, .25 );

    vec3 color = palette( diff, a, b, c, d * ( page / 2. ) );

    gl_FragColor = vec4(
        color,
        1.
    );

}
