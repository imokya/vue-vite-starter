import Experience from '../experience'
import { Spherical, Vector3 } from 'three'

export default class Controls {
  constructor() {
    this.experience = new Experience()
    this.camera = this.experience.camera

    this.setView()
    this.setEvents()
    this.enabled = true
  }

  setView() {
    this.view = {}
    this.view.spherical = {}
    this.view.spherical.origin = new Spherical(11, Math.PI * 0.5, 0)
    this.view.spherical.value = this.view.spherical.origin.clone()
    this.view.spherical.smoothed = this.view.spherical.value.clone()
    this.view.spherical.smoothing = 0.1

    this.view.spherical.limits = {}
    this.view.spherical.limits.phi = { min: 1, max: Math.PI * 0.5 }

    this.view.target = new Vector3(0, 0, 0)

    this.view.drag = {}

    this.view.drag.delta = {}
    this.view.drag.delta.x = 0
    this.view.drag.delta.y = 0

    this.view.drag.sensitivity = {}
    this.view.drag.sensitivity.min = 0.0005
    this.view.drag.sensitivity.max = 0.005
    this.view.drag.sensitivity.value = this.view.drag.sensitivity.min

    this.view.drag.previous = {}
    this.view.drag.previous.x = 0
    this.view.drag.previous.y = 0
  }

  setEvents() {
    this.view.down = (_x, _y) => {
      this.view.drag.previous.x = _x
      this.view.drag.previous.y = _y
      this.view.drag.sensitivity.value = this.view.drag.sensitivity.max
    }

    this.view.move = (_x, _y) => {
      this.view.drag.delta.x += _x - this.view.drag.previous.x
      this.view.drag.delta.y += _y - this.view.drag.previous.y
      this.view.drag.previous.x = _x
      this.view.drag.previous.y = _y
    }

    this.view.up = (_x, _y) => {
      this.view.drag.sensitivity.value = this.view.drag.sensitivity.min
    }

    this.view.onMouseDown = (_event) => {
      this.view.down(_event.clientX, _event.clientY)
    }
    this.view.onMouseMove = (_event) => {
      this.view.move(_event.clientX, _event.clientY)
    }
    this.view.onMouseUp = (_event) => {
      this.view.up()
    }
    window.addEventListener('mousedown', this.view.onMouseDown)
    window.addEventListener('mouseup', this.view.onMouseUp)
    window.addEventListener('mousemove', this.view.onMouseMove)
  }

  update() {
    if (!this.enabled) return
    this.view.spherical.value.theta -=
      this.view.drag.delta.x * this.view.drag.sensitivity.value
    this.view.spherical.value.phi -=
      this.view.drag.delta.y * this.view.drag.sensitivity.value

    //this.view.spherical.value.phi = Math.min(Math.max(this.view.spherical.value.phi, this.view.spherical.limits.phi.min), this.view.spherical.limits.phi.max)

    this.view.spherical.smoothed.phi +=
      (this.view.spherical.value.phi - this.view.spherical.smoothed.phi) *
      this.view.spherical.smoothing
    this.view.spherical.smoothed.theta +=
      (this.view.spherical.value.theta - this.view.spherical.smoothed.theta) *
      this.view.spherical.smoothing

    this.view.drag.delta.x = 0
    this.view.drag.delta.y = 0

    const viewPosition = new Vector3()
    viewPosition.setFromSpherical(this.view.spherical.smoothed)
    this.camera.instance.position.copy(viewPosition)

    this.camera.instance.lookAt(this.view.target)
  }
}
