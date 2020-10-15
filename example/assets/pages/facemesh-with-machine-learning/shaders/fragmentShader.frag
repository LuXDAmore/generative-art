// VSCode Frag
#pragma vscode_glsllint_stage : frag

// Uniforms
uniform mediump float time;
uniform mediump float playhead;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 face;

// Main
void main () {

    gl_FragColor = vec4( face.x, face.y, 1., 1. );

}
