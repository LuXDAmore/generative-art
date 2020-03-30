#pragma vscode_glsllint_stage : vert

precision mediump float;

uniform float page;

varying vec2 vUv;
varying vec3 vNormal;

attribute vec3 positionSphere;

void main() {

    vUv = uv;

    vNormal = normal;

    vec3 final = mix(
        position,
        positionSphere,
        smoothstep(
            0.,
            1.,
            page
        )
    );

    gl_Position = projectionMatrix * modelViewMatrix * vec4( final, max( .6, - page ) );

}
