import Experience from '@/experience'
import { Vector3, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import config from '~/config'

export default class Camera {
  constructor() {

    this.experience = Experience.getInstance()
    this.size = this.experience.size
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.origin = new Vector3(10, 20, 30)
    this.setInstance()
    this.setOrbitControls()

  }

  setInstance() {
    this.instance = new PerspectiveCamera(
      40,
      this.size.width / this.size.height,
      0.6,
      5000
    )
    this.instance.position.copy(this.origin)
    this.instance.rotation.order = 'XYZ'
    this.scene.add(this.instance)
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    // this.controls.enabled = config.debugCamera
    // if (!config.debugCamera) {
    //   this.controls.enablePan = false
    //   this.controls.minDistance = 200
    //   this.controls.maxDistance = 200
    //   this.controls.minPolarAngle = 0
    //   this.controls.maxPolarAngle = Math.PI / 2
    //   this.controls.enableDamping = true
    // }
  }

  resize() {
    this.instance.aspect = this.size.width / this.size.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    if (this.controls && this.controls.enabled) {
      this.controls.update()
    }
  }
}
