import Experience from '@/experience'
import Environment from './Environment'
import Plane from './Plane'

export default class World {
  constructor() {
    this.experience = Experience.getInstance()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer.instance
    this.time = this.experience.time

    this.resource.on('ready', () => {
      this.environment = new Environment()
      this.plane = new Plane()
    })
  }

  update() {
    const { elapsed, delta } = this.time
    this.plane && this.plane.update()
  }
}
