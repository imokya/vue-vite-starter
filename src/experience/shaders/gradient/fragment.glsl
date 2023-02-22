varying vec2 vUv;

void main() {
  vec3 color1 = vec3(1.0, 0.0, 1.0);
  vec3 color2 = vec3(0.0, 1.0, 0.0);
  float dist = length(vUv - vec2(0.5));
  vec3 color = mix(color1, color2, vUv.x);
  gl_FragColor = vec4(vec3(color), 1.0);
}