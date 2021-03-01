#pragma vscode_glsllint_stage : vert

precision mediump float;

uniform float page;

varying vec3 vNormal;

attribute vec3 positionSphere;

void main() {

    vNormal = normal;

    vec3 final = mix(
        position,
        positionSphere,
        page
    );

    vec4 mvPosition = modelViewMatrix * vec4( final, 1.0 );

    gl_Position = projectionMatrix * mvPosition;

}
