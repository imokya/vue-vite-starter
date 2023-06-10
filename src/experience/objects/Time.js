const DELTA_MIN = 0.016

export default class Time {
  
  constructor() {
    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16
    this.update()
  }

  update() {
    const currentTime = Date.now()
    const delta = (currentTime - this.current) * 0.001
    this.delta = Math.min(DELTA_MIN, delta)
    this.current = currentTime
    this.elapsed = (this.current - this.start) * 0.001
  }

}