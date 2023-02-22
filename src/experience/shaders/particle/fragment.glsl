uniform sampler2D particleTexture;

varying vec2 vAngle;
varying vec4 vColor;
varying float vSize;

void main() {
  vec2 uv = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
  vec4 tex = texture2D(particleTexture, uv);
  gl_FragColor = tex * vColor;
}