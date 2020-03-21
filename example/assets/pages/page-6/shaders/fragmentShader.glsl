#pragma vscode_glsllint_stage : frag

uniform float time;
uniform float progress;
uniform vec3 mouse;

uniform sampler2D image;
uniform sampler2D displacement;

varying vec2 vUv;
varying vec3 vPosition;

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

    vec4 displace = texture2D(
        displacement,
        vUv
    );

    vec2 displacedUv = vec2(
        vUv.x,
        vUv.y
    );

    displacedUv.y = mix(
        vUv.y,
        displace.r - 0.2,
        progress
    );

    vec4 color = texture2D(
        image,
        displacedUv
    );

    float dist = length( vPosition - mouse );
    float prox = 1. - map(
        dist,
        0.,
        0.3,
        0.,
        1.
    );

    prox = clamp(
        prox,
        0.,
        1.
    );

    color.r = displace.r + texture2D(
        image,
        displacedUv * abs( cos( prox * time ) ) + vec2( 0., 0.005 ) * progress
    ).r;
    color.g = displace.g - texture2D(
        image,
        displacedUv - abs( sin( prox * time ) ) + vec2( 0., 0.01 ) * progress
    ).g;
    color.b = displace.b - texture2D(
        image,
        displacedUv * prox + vec2( 0., 0.02 ) * progress
    ).b;

    gl_FragColor = color;

}
