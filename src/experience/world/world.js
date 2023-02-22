import Experience from '../experience'
import Environment from './environment'
import Plane from './plane'

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer.instance

    this.resource.on('ready', () => {
      this.environment = new Environment()
      this.plane = new Plane()
    })
  }

  update() {
    if (this.park && this.park.update) {
      this.park.update()
    }
  }
}
