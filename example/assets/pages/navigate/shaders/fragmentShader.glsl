#pragma vscode_glsllint_stage : frag

precision mediump float;

uniform float page;
uniform float time;

varying vec2 vUv;
varying vec3 vNormal;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
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
    vec3 a = vec3( .8, .5, .4 );
    vec3 b = vec3( .2, .4, .2 );
    vec3 c = vec3( 2.0, 1.0, 1.0 );
    vec3 d = vec3( .00, .25, .25 );

    vec3 color = palette( diff, a, b, c, d * time );

    gl_FragColor = vec4(
        color,
        1.
    );

}
