// VSCode Frag
#pragma vscode_glsllint_stage : frag

// Uniforms
uniform mediump float time;
uniform mediump float playhead;

// Main
void main () {

    gl_FragColor = vec4( playhead, playhead, playhead, 1. );

}
