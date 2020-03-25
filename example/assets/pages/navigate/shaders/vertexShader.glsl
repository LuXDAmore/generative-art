#pragma vscode_glsllint_stage : vert

precision mediump float;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main () {

    vUv = uv;

    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    vWorldPosition = worldPosition.xyz;

    gl_Position =  projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );

}
