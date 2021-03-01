#pragma vscode_glsllint_stage : frag

uniform sampler2D microphone;
uniform sampler2D video;

uniform float bass;
uniform float mid;
uniform float treble;

uniform float time;

uniform vec3 mouse;
uniform float mouse_radius;

varying vec3 vPosition;

varying vec2 vUv;

float map(
    float value,
    float min1,
    float max1,
    float min2,
    float max2
) {

    return min2 + ( value - min1 ) * ( max2 - min2 ) / ( max1 - min1 );

}

void main() {

    vec3 webcam = texture2D(
        video,
        vUv
    ).rgb;

    vec2 displacedUv = vec2(
        vUv.x,
        vUv.y
    );

    displacedUv.y = mix(
        vUv.y,
        bass,
        1.0
    );
    displacedUv.x = mix(
        vUv.x,
        mid,
        treble
    );

    float dist = length( vPosition - mouse );
    float prox = 1. - map(
        dist,
        0.,
        mouse_radius,
        0.,
        1.
    );

    prox = clamp(
        prox,
        0.,
        1.
    );

    // Microphone
    vec3 backgroundColor = vec3( displacedUv.y, displacedUv.x, prox );

    float f = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).r;
    float g = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).g;
    float b = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).b;

    vec3 color = vec3( f, g, b );

    float i = sin( step( vUv.y, f ) * step( f - 0.0125, vUv.y ) );

    // Webcam
    webcam.r = webcam.r + ( 1. - bass );
    webcam.g = webcam.g + ( 1. - treble );
    webcam.b = webcam.b + ( 1. - mid );

    // Color mixer
    vec4 mixed = vec4( mix( webcam, mix( backgroundColor, color, i ), bass ), 1.0 );

    gl_FragColor = mixed;

}
