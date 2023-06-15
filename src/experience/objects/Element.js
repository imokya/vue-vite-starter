import Experience from '@/experience'

export default class Element {
  constructor() {
    this.experience = Experience.getInstance()
    this.resource = this.experience.resource
    this.camera = this.experience.camera
    this.scene = this.experience.scene
    this.debug = this.experience.debug
    this.time = this.experience.time
    this.world = this.experience.world
  }

  update() {}
  resize() {}
}
