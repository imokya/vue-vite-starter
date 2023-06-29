import Element from '@/experience/objects/Element'
import {
  BufferGeometry,
  BufferAttribute,
  Points,
  Float32BufferAttribute,
} from 'three'
import FireworkMaterial from '@/experience/materials/FireworkMaterial'
import config from '~/config'

const MAX_PIXEL_AMOUNT = 0

export default class Firework extends Element {
  constructor() {
    super()
    this._init()
  }

  _init() {
    this._getTextInfo()
  }

  _getTextInfo() {
    const img = new Image()
    img.src = `${config.publicPath}static/textures/logo.png`
    img.onload = () => {
      this._getPixelInfo(img)
      this._createParticles()
    }
  }

  _createParticles() {
    const pixelAmount = Math.max(MAX_PIXEL_AMOUNT, this.pixelInfo.length / 3)
    const count = pixelAmount * 3

    const offsetXData = new Float32Array(pixelAmount)
    const offsetYData = new Float32Array(pixelAmount)
    const randomData = new Float32Array(pixelAmount)
    const positions = new Float32Array(count)
    const geometry = new BufferGeometry()

    let x, y, z
    for (let i = 0; i < count; i += 3) {
      const offset = i * 3
      if (this.pixelInfo[offset]) {
        x = this.pixelInfo[offset + 0]
        y = this.pixelInfo[offset + 1]
        z = this.pixelInfo[offset + 2]
      } else {
        z = 0
      }
      offsetXData[i / 3] = x
      offsetYData[i / 3] = -y
    }

    geometry.setAttribute('a_offset_x', new BufferAttribute(offsetXData, 1))
    geometry.setAttribute('a_offset_y', new BufferAttribute(offsetYData, 1))
    geometry.setAttribute('a_random', new BufferAttribute(randomData, 1))
    geometry.setAttribute(
      'position',
      new BufferAttribute(new Float32Array(this.pixelInfo), 3)
    )

    geometry.computeBoundingSphere()
    geometry.center()

    const material = new FireworkMaterial()
    const mesh = new Points(geometry, material)

    this.scene.add(mesh)
  }

  _getPixelInfo(img) {
    const w = img.width
    const h = img.height

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    const data = ctx.getImageData(0, 0, w, h).data
    const info = []
    for (let i = 0, len = data.length; i < len; i += 4) {
      if (data[i + 3] > 0) {
        const x = ((i / 4) % w) - w * 0.5
        const y = ((i / 4 / w) | 0) - h * 0.5
        const z = Math.random() * 10 - 5
        const alpha = data[i + 3]
        info.push(x, y, z)
      }
    }
    this.pixelInfo = info
  }

  update() {}
}
