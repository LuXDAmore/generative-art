#pragma vscode_glsllint_stage : frag

uniform vec3 color;
uniform vec3 bottomColor;
uniform float time;
uniform float offset;
uniform float exponent;
uniform sampler2D image;

varying vec3 vWorldPosition;
varying vec2 vUv;

void main() {

    vec3 webcam = texture2D(
        image,
        vUv
    ).rgb;

    float h = normalize( vWorldPosition + offset ).y;

    vec3 color = 0.5 + 0.5 * cos( ( time / 1.5 ) + vWorldPosition.xyx + vec3( webcam.r, webcam.g, webcam.b ) );

    gl_FragColor = vec4( mix( bottomColor, color, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );

}
