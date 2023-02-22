import EventEmitter from './eventEmitter'

export default class Size extends EventEmitter {
  constructor() {
    super()

    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    window.addEventListener('resize', (e) => {
      this._setSize()
      this.trigger('resize')
    })

    setTimeout(() => {
      this._setSize()
      this.trigger('resize')
    }, 350)
  }

  _setSize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
}
