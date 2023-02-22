uniform float elapsedTime;
uniform float opacity;
varying vec2 vUv;
varying float vData;
void main() {
  float progress = elapsedTime;
  float alpha = 1. - clamp( abs( progress - vUv.x ) * 5., .0, 1. );
  float border = 1. - abs( vUv.x * 2. - 1. ) * 1.;
  gl_FragColor = vec4( vec3( 1. ), alpha * opacity * border );
}