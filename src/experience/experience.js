import Size from './utils/size'
import Time from './utils/time'
import Camera from './camera'
import Renderer from './renderer'
import World from './world/world'

import { Scene, Mesh } from 'three'
import Resource from './utils/resource'
import Debug from './utils/debug'
import source from './source'
import Lights from './lights'

import { RoomEnvironment } from './objects/RoomEnvironment'

let instance = null

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance
    }

    instance = this

    window.experience = this

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

    this.size.on('resize', () => {
      this.resize()
    })

    this.time.on('tick', () => {
      this.update()
    })
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    this.camera.update()
    this.world.update()
    this.renderer.update()
  }

  destroy() {
    this.sizes.off('resize')
    this.time.off('tick')

    this.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.geometry.dispose()
        for (const key in child.material) {
          const value = child.material[key]
          if (value && typeof value.dispose === 'function') {
            value.dispose()
          }
        }
      }
    })

    this.camera.controls.dispose()
    this.renderer.instance.dispose()

    if (this.debug.active) this.debug.ui.destroy()
  }
}
