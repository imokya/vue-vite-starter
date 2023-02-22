#define STANDARD
varying vec2 vUv;
uniform mat3 uvTransform;
attribute float count;
attribute float progress;
attribute float data;
attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float counters;
uniform float lineWidth;
uniform float elapsedTime;
vec3 getExtrusion() {
  vec3 T = normalize( next - position );
  vec3 B = normalize( cross( T, next + position ) );
  vec3 N = normalize( cross( B, T ) );
  return normalize( B + N );
}
void main() {
  // vUv = (uvTransform * vec3( uv, 1.0 )).xy;
  vUv = uv;
  #include <begin_vertex>
  vec3 extrusion = vec3( .0, 1., .0 );
  transformed += extrusion * lineWidth * .5 * side;
  #include <project_vertex>
}