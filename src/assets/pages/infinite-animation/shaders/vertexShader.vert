// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Main
void main () {

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );

}
