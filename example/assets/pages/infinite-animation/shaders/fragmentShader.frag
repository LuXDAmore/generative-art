// VSCode Frag
#pragma vscode_glsllint_stage : frag

// Math
#define PI 3.1415926535897932384626433832795;

// Uniforms
uniform mediump float time;
uniform mediump float playhead;

// Main
void main () {

    float p = 0.5 - playhead * PI;

    gl_FragColor = vec4( p, 1., 1., 1. );

}
