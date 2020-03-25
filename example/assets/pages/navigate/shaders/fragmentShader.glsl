#pragma vscode_glsllint_stage : frag

precision mediump float;

uniform float page;
uniform float time;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main () {

    float h = normalize( vWorldPosition ).y;
    float y = normalize( vWorldPosition ).x;

    vec3 color = 0.5 + 0.5 * cos( ( page * ( time  / y ) ) + vUv.xyx + vec3( 0.0, 2.0, 4.0 ) ) * h;

    gl_FragColor = vec4(
        color,
        1.0
    );

}
