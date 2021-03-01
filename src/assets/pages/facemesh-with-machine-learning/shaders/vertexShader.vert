// Uniforms
uniform mediump float pointsSize;

// Main
void main () {

   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = pointsSize * ( 1. / - mvPosition.z );

    gl_Position = projectionMatrix * mvPosition;

}
