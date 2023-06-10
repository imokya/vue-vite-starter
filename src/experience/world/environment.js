import Experience from '@/experience'
import {
  PMREMGenerator
} from 'three'
import { RoomEnvironment } from '../environment/RoomEnvironment'

export default class Environment {
  constructor() {
    this.experience = Experience.getInstance()
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer
    this.scene = this.experience.scene
    this.setEnvMap()
  }

  setEnvMap() {
    const pmremGenerator = new PMREMGenerator(this.renderer.instance)
    // const envRenderTarget = pmremGenerator.fromEquirectangular(
    //   this.resource.items.envMap
    // )
    const envRenderTarget = pmremGenerator.fromScene(new RoomEnvironment())
    this.scene.environment = envRenderTarget.texture
  }
}
