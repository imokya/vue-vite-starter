import Experience from '@/experience'

export default class Plane {
  constructor() {
    this.experience = Experience.getInstance()
    this.resource = this.experience.resource
    this.scene = this.experience.scene
    this._init()
  }

  _init() {
    const model = this.resource.items.plane.scene
    this.scene.add(model)
  }

  update() {
    
  }
}
