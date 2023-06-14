import Size from './objects/Size'
import Time from './objects/Time'
import Camera from './objects/Camera'
import Renderer from './objects/Renderer'
import World from './world'

import { Scene, Mesh } from 'three'
import Resource from './objects/Resource'
import Debug from './objects/Debug'
import source from './objects/Source'
import Lights from './objects/Lights'

export default class Experience {
  static instance

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this

    this.canvas = canvas
    this.debug = new Debug()
    this.size = new Size()
    this.time = new Time()
    this.scene = new Scene()
    this.resource = new Resource(source)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.lights = new Lights()
    this.world = new World()
    window.experience = this
    this.setListeners()
  }

  static getInstance() {
    return Experience.instance
  }

  setListeners() {
    window.addEventListener('resize', this.resize.bind(this))
    this.animationFrameId = window.requestAnimationFrame(this.update.bind(this))
  }

  resize() {
    this.size.resize()
    this.camera.resize()
    this.renderer.resize()
    this.world.resize()
  }

  update() {
    this.time.update()
    this.camera.update()
    this.world.update()
    this.renderer.update()
    this.animationFrameId = window.requestAnimationFrame(this.update.bind(this))
  }

  removeListners() {
    window.cancelAnimationFrame(this.animationFrameId)
    window.removeEventListener('resize', this.resize.bind(this))
  }

  destroy() {
    this.removeListners()
    this.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.geometry.dispose()
        for (const key in child.material) {
          const material = child.material[key]
          material.dispose()
        }
      }
    })
    this.camera.controls.dispose()
    this.renderer.instance.dispose()
  }
}
