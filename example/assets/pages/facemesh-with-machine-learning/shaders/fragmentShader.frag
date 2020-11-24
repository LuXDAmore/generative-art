// VSCode Frag
#pragma vscode_glsllint_stage : frag

// Const
const float PI = 3.1415926535897932384626433832795;

// Varying
varying vec3 vPos;

// Main
void main () {

    gl_FragColor = vec4( gl_PointCoord, 1., 1. ) * vec4( vPos, 1. );

}
