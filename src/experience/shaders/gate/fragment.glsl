varying vec2 vUv;
uniform sampler2D uMap;
uniform float uTime;

void main() {
  vec2 v = vec2(vUv.x*0.1 - 0.5, vUv.y);
  v.y -= uTime * 0.0005;


  vec4 color = texture2D(uMap, v);
  gl_FragColor = color;
}