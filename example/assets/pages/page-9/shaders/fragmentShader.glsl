precision mediump float;

varying vec2 vUv;
varying float vWave;
uniform sampler2D image;

void main() {

    float wave = vWave * 0.25;
    float r = texture2D(image, vUv + wave).r;
    float g = texture2D(image, vUv).g;
    float b = texture2D(image, vUv).b;

    vec3 texture = vec3(r, g, b);

    gl_FragColor = vec4(texture, 1.);

}
