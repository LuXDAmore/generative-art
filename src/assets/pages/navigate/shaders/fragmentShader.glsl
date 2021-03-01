#pragma vscode_glsllint_stage : frag

precision mediump float;

uniform float page;

varying vec3 vNormal;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {

    return a + b * cos( 6.28318 * ( c * t + d ) );

}


void main () {

    float diff = dot(
        normalize(
            vec3(
                1.,
                1.,
                0.5
            )
        ),
        mix(
            vNormal,
            vec3(
                0.6,
                0.,
                0.1
            ),
            page
        )
    );


    // Colors
    // https://iquilezles.org/www/articles/palettes/palettes.htm
    vec3 a = vec3( 0.1, 0., 0.1 );
    vec3 b = vec3( 0.6, 0.5, 0.5 );
    vec3 c = vec3( 0.5, 0.5, 0.5 );
    vec3 d = vec3( 0.6, 0.5, 0.5 );

    vec3 color = palette( diff, a, b, c, d );

    gl_FragColor = vec4(
        color,
        1.
    );

}
