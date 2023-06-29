import { AdditiveBlending, ShaderMaterial } from 'three'

import vertexShader from '@/experience/shaders/firework/vert.glsl'
import fragmentShader from '@/experience/shaders/firework/frag.glsl'

export default class FireworkMaterial {
  constructor() {
    const material = new ShaderMaterial({
      uniforms: {
        uTime: {
          value: 0,
        },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      blending: AdditiveBlending,
    })
    return material
  }
}
