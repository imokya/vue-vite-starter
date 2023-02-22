
uniform mat3 uvTransform;
uniform vec2 resolution;
varying vec2 vUv;
void main() {
  vUv = (vec3( uv, 1 ) ).xy;
  gl_Position = modelMatrix * vec4( position, 1. );
  gl_Position.xy /= resolution * .5;
}

