varying vec2 vUv;
uniform float playhead;

vec3 hsl2rgb( vec3 c ) {

    vec3 rgb = clamp( abs( mod( c.x * 6.0 + vec3( 0.0, 4.0, 2.0 ), 6.0 ) - 3.0 ) - 1.0, 0.0, 1.0 );

    return c.z + c.y * ( rgb - 0.5 ) * ( 1.0 - abs( 2.0 * c.z - 1.0 ) );

}

void main () {

    // number of horizontal bands
    float bands = 1000.;

    // offset texture by loop time
    float offset = playhead;

    // get a 0..1 value from this
    float y = mod( offset + vUv.y, 1.0 );

    // get N discrete steps of hue
    float hue = floor( y * bands ) / vUv.y;

    // now get a color
    float sat = .72;
    float light = .56;

    vec3 color = hsl2rgb(
        vec3(
            hue,
            sat,
            light
        )
    );

    gl_FragColor = vec4( color, 1.0 );

}
