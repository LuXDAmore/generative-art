// Const
const float PI = 3.1415926535897932384626433832795;

// Varying
varying vec4 vPos;
varying vec2 vUv;

// Main
void main () {

    // Make point rounded
    float dist = length( gl_PointCoord - vec2( 0.5 ) );
    float alpha = 1. - smoothstep( 0.45, 0.5, dist );

    // Bring back pixels
    // gl_FragColor = vec4( gl_PointCoord, 1., alpha ) * vPos;
    // gl_FragColor = vec4( vPos.xyz, alpha );
    gl_FragColor = vec4( vUv, 1., alpha );

}
