import { DirectionalLight, AmbientLight, CameraHelper } from 'three'
import Experience from '@/experience'

export default class Lights {
  constructor() {
    this.experience = Experience.getInstance()
    this.scene = this.experience.scene
    this._init()
  }

  _init() {
    this.setLights()
  }

  setLights() {
    // const light = new DirectionalLight(0xffffff, 0.2)
    // light.shadow.mapSize.width = 512
    // light.shadow.mapSize.height = 512
    // light.shadow.camera.near = -10
    // light.shadow.camera.far = 3
    // light.shadow.camera.top = -30
    // light.shadow.camera.bottom = 30
    // light.shadow.camera.left = -30
    // light.shadow.camera.right = 30
    // light.position.set(0, 3, 0)
    // this.scene.add(light)
    // this.scene.add(light.target)
    // light.castShadow = true
    // this.light = light
    // const helper = new CameraHelper(light.shadow.camera)
    // this.scene.add(helper)
    // const am = new AmbientLight(0xffffff, 1)
    // this.scene.add(am)
  }
}
