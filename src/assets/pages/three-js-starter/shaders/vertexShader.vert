// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Uniforms - Automatically injected by ThreeJs
// attribute vec3 position;
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;

// Main
void main () {

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );

}
