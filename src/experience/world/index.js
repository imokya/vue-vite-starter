import Element from '@/experience/objects/Element'
import Environment from './Environment'
import Firework from './firework'

export default class World extends Element {
  constructor() {
    super()
    this.resource.on('ready', () => {
      this.environment = new Environment()
      this.firework = new Firework()
    })
  }

  update() {
    this.firework && this.firework.update()
  }
  resize() {}
}
