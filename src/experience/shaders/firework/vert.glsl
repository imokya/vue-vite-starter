attribute float a_offset_x;
attribute float a_offset_y;

void main() {

  vec3 pos = position;
  pos.x = a_offset_x;
  pos.y = a_offset_y;



  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_PointSize = 0.001 * (1.0 - viewPosition.z);
  gl_Position = projectionMatrix * viewPosition;
}
