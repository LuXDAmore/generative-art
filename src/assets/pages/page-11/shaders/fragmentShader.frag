// VSCode Frag
precision mediump float;

// Const
const float PI = 3.1415926535897932384626433832795;

// User values
uniform float uTime;
uniform vec2 uMousePosition;
uniform float uHue;
uniform float uHueVariation;
uniform float uDensity;
uniform float uDisplacement;

// Varying
varying vec2 vUv;

// Colors
float hue2rgb( float f1, float f2, float hue ) {

        if( hue <= 0.0 )
            hue += 1.0;
        else if( hue > 1.0 )
            hue -= 1.0;

        float res;

        if( ( 6.0 * hue ) <= 1.0 )
            res = f1 + (f2 - f1) * 6.0 * hue;
        else if( ( 2.0 * hue ) < 1.0 )
            res = f2;
        else if( ( 3.0 * hue ) < 2.0 )
            res = f1 + ( f2 - f1 ) * ( ( 2.0 / 3.0 ) - hue ) * 6.0;
        else
            res = f1;

        return res;

}
vec3 hsl2rgb(vec3 hsl) {

        vec3 rgb;

        if( hsl.y == 0.0 ) {

            rgb = vec3( hsl.z ); // Luminance

        } else {

            float f2;

            if( hsl.z < 0.5 )
                f2 = hsl.z * ( 1.0 + hsl.y );
            else
                f2 = hsl.z + hsl.y - hsl.y * hsl.z;

            float f1 = 2.0 * hsl.z - f2;

            rgb.r = hue2rgb( f1, f2, hsl.x + ( 1.0/3.0 ) );
            rgb.g = hue2rgb( f1, f2, hsl. x );
            rgb.b = hue2rgb( f1, f2, hsl.x - ( 1.0/3.0 ) );

        }

        return rgb;

}
vec3 hsl2rgb( float h, float s, float l ) {

        return hsl2rgb(vec3(h, s, l));

}

// Noise
float mod289( float x ) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289( vec4 x ) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 perm( vec4 x ){ return mod289( ( ( x * 34.0 ) + 1.0 ) * x ); }
float rand(vec2 co) { return fract( sin( dot( co.xy ,vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ); }
vec2 fade( vec2 t ) { return t * t * t * ( t * ( t * 6.0 - 15.0 ) + 10.0 ); }

float cnoise( vec2 P ) {

        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
        Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;
        vec4 i = perm(perm(ix) + iy);
        vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
        vec4 gy = abs(gx) - 0.5;
        vec4 tx = floor(gx + 0.5);
        gx = gx - tx;
        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);
        vec4 norm = 1.79284291400159 - 0.85373472095314 *
        vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
        g00 *= norm.x;
        g01 *= norm.y;
        g10 *= norm.z;
        g11 *= norm.w;
        float n00 = dot(g00, vec2(fx.x, fy.x));
        float n10 = dot(g10, vec2(fx.y, fy.y));
        float n01 = dot(g01, vec2(fx.z, fy.z));
        float n11 = dot(g11, vec2(fx.w, fy.w));
        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);

        return 2.3 * n_xy;

}

// Main
void main () {

    float mouseDistance = length( vUv - uMousePosition );
    float t = uTime * .005;
    float elevation =  vUv.y * uDensity * 30.0;

    float shadow = smoothstep( 0.0, .3 + sin( t * 5.0 * PI ) * .1 , mouseDistance );
    elevation += shadow * 5.0;

    float displacement = cnoise( vec2( t + vUv.y * 2.0, t + vUv.x * 3.0 ) ) * uDisplacement * 3.;

    elevation += displacement * 4.0;
    elevation *= 2.0 + cnoise( vec2( t + vUv.y * 1.0, t + .5) ) * 2.0 ;


    float light = .9 + fract( elevation ) ;
    light *= .9 + (1.0 - ( displacement * displacement ) ) * .1;
    elevation = floor( elevation );

    float hue =  uHue + shadow * .1 + cnoise( vec2( elevation * .10, .1 + t ) ) * uHueVariation;
    float saturation = .6;
    float brightness =  - ( 1.0 - shadow ) * .1 + .5  - smoothstep( 0.0, .9, cnoise( vec2( elevation * .5, .4 + t * 5.0 ) ) ) * .1;

    vec3 hslCol = vec3( hue, saturation, brightness );
    vec3 col = hsl2rgb( hslCol ) * vec3( light, 1.0, 1.0 );

    gl_FragColor = vec4( col, 1. );

}
