// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Varying
varying vec4 vPos;
varying vec2 vUv;

// Main
void main () {

   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    vUv = uv;
    vPos = mvPosition;

    gl_PointSize = 10. * ( 1. / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}
