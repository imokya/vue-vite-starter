varying vec2 vUv;
uniform sampler2D uMap1;
uniform sampler2D uMap2;
uniform float uProgress;


void main() {
  vec2 v1 = vec2(vUv.x, vUv.y);
  vec2 v2 = vec2(vUv.x, vUv.y - uProgress);
  vec4 color1 = texture2D(uMap1, v1);
  vec4 color2 = texture2D(uMap2, v1);
  if(1.0 - vUv.y > uProgress) {
    color2 = vec4(1.0, 1.0, 1.0, 1.0);
  }
  gl_FragColor = color1 * color2;
}