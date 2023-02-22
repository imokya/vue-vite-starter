import Experience from '@/experience/experience'

export default class Plane {
  constructor() {
    this.experience = new Experience()
    this.resource = this.experience.resource
    this.scene = this.experience.scene
    this._init()
  }

  _init() {
    const model = this.resource.items.plane.scene
    this.scene.add(model)
  }
}
