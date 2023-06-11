import Element from '@/experience/objects/Element'

export default class Plane extends Element {
  constructor() {
    super()
    this._init()
  }

  _init() {
    const model = this.resource.items.plane.scene
    this.scene.add(model)
  }
}
