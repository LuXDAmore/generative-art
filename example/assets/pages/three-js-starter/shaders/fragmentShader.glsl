#pragma vscode_glsllint_stage : frag

varying vec2 vUv;

uniform float time;
uniform float playhead;

void main () {

    gl_FragColor = vec4( time / 6., 1., 1., 1. );

}
