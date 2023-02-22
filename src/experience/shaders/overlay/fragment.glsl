varying vec2 vUv;
uniform float progress;
uniform vec2 resolution;
float circle(vec2 coordinates, float radius){
  return length(coordinates) - radius;
}
float getAlpha() {
  float aspect = resolution.x / resolution.y;
  vec2 normalized = (vUv * 2. - 1.) / 3.;
  normalized.x *= aspect;
  float distance = circle(normalized, progress);
  // float distanceChange = fwidth( distance ) * .5;
  // return 1. - smoothstep( distanceChange, -distanceChange, distance );
  return distance > 0. ? 1.: 0.;
}
void main() {
  float alpha = getAlpha();
  gl_FragColor = vec4( vec3( 0. ), alpha );
}
