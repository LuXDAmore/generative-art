// VSCode Frag
#pragma vscode_glsllint_stage : frag

// Shared
varying mediump vec4 mvPosition;

// Uniforms
uniform mediump float playhead;

// Main
void main () {

    gl_FragColor = vec4( mvPosition.xyz, 1. );

}
