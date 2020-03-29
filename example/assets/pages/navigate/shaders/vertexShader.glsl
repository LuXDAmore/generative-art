#pragma vscode_glsllint_stage : vert

precision mediump float;

uniform float page;
uniform float time;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vPosition;

attribute vec3 positionSphere;

void main() {

    vUv = uv;

    vNormal = normal;

    vec3 pos = position;

    vec3 final = mix(
        pos,
        positionSphere,
        .5 + .5 * sin( time / 2. )
    );

    gl_Position = projectionMatrix * modelViewMatrix * vec4( final, 1.0 );

}
