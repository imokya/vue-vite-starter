
attribute float size;
attribute float rotation;
attribute vec4 color;

varying vec2 vAngle;
varying vec4 vColor;
varying float vSize;

void main() {

  vAngle = vec2(cos(rotation), sin(rotation));
  vColor = color;

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * 800.0 / length(mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;


}