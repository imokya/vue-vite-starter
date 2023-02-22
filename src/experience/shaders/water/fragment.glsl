#pragma glslify: cnoise = require(../partials/perlin2d.glsl)
varying vec2 vUv;

uniform float uTime;

void main() {
  vec2 uv2 = vUv;
  vec3 color1 = vec3(0.1, 0.5, 0.8);
  vec3 color2 = vec3(1.0, 1.0, 1.0);
  float strength = step(0.9, sin(cnoise(uv2 * 30.0)* 10.0));
  vec3 color = mix(color1, color2, strength);
  gl_FragColor = vec4(color, 0.15);
}