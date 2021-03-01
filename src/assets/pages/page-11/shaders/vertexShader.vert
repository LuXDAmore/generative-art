// VSCode vertex
#pragma vscode_glsllint_stage : vert

// pass a few things along to the vertex shader
varying vec2 vUv;

void main() {

    vUv = uv;
    gl_Position = vec4( position, 1.0) ;

}
