import Element from '@/experience/objects/Element'
import Environment from './Environment'
import Plane from './Plane'

export default class World extends Element {
  constructor() {
    super()
    this.resource.on('ready', () => {
      this.environment = new Environment()
      this.plane = new Plane()
    })
  }

  update() {
    this.plane && this.plane.update()
  }
  resize() {}
}
