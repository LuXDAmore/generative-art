// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Shared
varying mediump vec4 mvPosition;

// Uniforms
uniform mediump float playhead;

// Main
void main () {

    mvPosition = modelViewMatrix * vec4( position, 1. );

    gl_PointSize = 100. * ( 1. / mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}
