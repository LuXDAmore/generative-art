// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Uniforms - Automatically injected by ThreeJs
// uniform mat4 position;
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 face;

attribute vec3 faceLandmarks;

// Main
void main () {

    vUv = uv;
    vNormal = normal;

    face = faceLandmarks;

   vec4 mvPosition = modelViewMatrix * vec4( position.xyz, 1.0 );

    gl_Position = projectionMatrix * mvPosition;

}
