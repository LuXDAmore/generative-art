// VSCode vertex
#pragma vscode_glsllint_stage : vert

// Varying
varying vec3 vPos;

// Main
void main () {

    vPos = position.xyz;

   vec4 mvPosition = modelViewMatrix * vec4( position.xyz, 1.0 );

    gl_PointSize = 1000. * ( 1. / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}
