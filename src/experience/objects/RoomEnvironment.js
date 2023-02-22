/**
 * https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/three-components/EnvironmentScene.ts
 */

import {
  BackSide,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  PointLight,
  Scene
} from 'three'

class RoomEnvironment extends Scene {
  constructor() {
    super()

    const geometry = new BoxGeometry()
    geometry.deleteAttribute('uv')

    const roomMaterial = new MeshStandardMaterial({ side: BackSide })
    const boxMaterial = new MeshStandardMaterial({
      roughness: 0
    })

    const mainLight = new PointLight(0xffffff, 5.0, 28, 2)
    mainLight.position.set(0.418, 16.199, 0.3)
    this.add(mainLight)

    const room = new Mesh(geometry, roomMaterial)
    room.position.set(-0.757, 13.219, 0.717)
    room.scale.set(31.713, 28.305, 28.591)
    this.add(room)

    const box1 = new Mesh(geometry, boxMaterial)
    box1.position.set(-10.906, 2.009, 1.846)
    box1.rotation.set(0, -0.195, 0)
    box1.scale.set(2.328, 7.905, 4.651)
    this.add(box1)

    const box2 = new Mesh(geometry, boxMaterial)
    box2.position.set(-5.607, -0.754, -0.758)
    box2.rotation.set(0, 0.994, 0)
    box2.scale.set(1.97, 1.534, 3.955)
    this.add(box2)

    const box3 = new Mesh(geometry, boxMaterial)
    box3.position.set(6.167, 0.857, 7.803)
    box3.rotation.set(0, 0.561, 0)
    box3.scale.set(3.927, 6.285, 3.687)
    this.add(box3)

    const box4 = new Mesh(geometry, boxMaterial)
    box4.position.set(-2.017, 0.018, 6.124)
    box4.rotation.set(0, 0.333, 0)
    box4.scale.set(2.002, 4.566, 2.064)
    this.add(box4)

    const box5 = new Mesh(geometry, boxMaterial)
    box5.position.set(2.291, -0.756, -2.621)
    box5.rotation.set(0, -0.286, 0)
    box5.scale.set(1.546, 1.552, 1.496)
    this.add(box5)

    const box6 = new Mesh(geometry, boxMaterial)
    box6.position.set(-2.193, -0.369, -5.547)
    box6.rotation.set(0, 0.516, 0)
    box6.scale.set(3.875, 3.487, 2.986)
    this.add(box6)

    // const box7 = new Mesh( geometry, boxMaterial );
    // box7.position.set( 3.607, -0.754, 4.758 );
    // box7.rotation.set( 0, 0.994, 0 );
    // box7.scale.set( 30.970, 10.534, 300.955 );
    // this.add( box7 );

    // -x right
    const light1 = new Mesh(geometry, createAreaLightMaterial(50))
    light1.position.set(-16.116, 14.37, 8.208)
    light1.scale.set(0.1, 2.428, 2.739)
    this.add(light1)

    // -x left
    const light2 = new Mesh(geometry, createAreaLightMaterial(350))
    light2.position.set(-16.109, 18.021, -8.207)
    light2.scale.set(0.1, 2.425, 2.751)
    this.add(light2)

    // +x
    const light3 = new Mesh(geometry, createAreaLightMaterial(17))
    light3.position.set(14.904, 12.198, -1.832)
    light3.scale.set(0.15, 4.265, 6.331)
    this.add(light3)

    // +z
    const light4 = new Mesh(geometry, createAreaLightMaterial(63))
    light4.position.set(1.462, 10.89, 14.52)
    light4.scale.set(4.38, 5.441, 0.088)
    this.add(light4)

    // -z
    const light5 = new Mesh(geometry, createAreaLightMaterial(10))
    light5.position.set(3.235, 7, -9.6)
    light5.scale.set(3.5, 3.0, 0.3)
    this.add(light5)

    // +y
    const light6 = new Mesh(geometry, createAreaLightMaterial(60))
    light6.position.set(0.0, 20.0, 0.0)
    light6.scale.set(1.0, 0.1, 1.0)
    this.add(light6)

    const light7 = new Mesh(geometry, createAreaLightMaterial(5))
    light7.rotation.x = Math.PI / 3
    light7.position.set(0.0, 0.5, 3.0)
    light7.scale.set(0.2, 0.1, 1.0)
    this.add(light7)

    const light8 = new Mesh(geometry, createAreaLightMaterial(5))
    light8.rotation.x = -Math.PI / 3
    light8.position.set(0.0, 0.5, -3.0)
    light8.scale.set(0.2, 0.1, 1.0)
    this.add(light8)
  }
}

function createAreaLightMaterial(intensity) {
  const material = new MeshBasicMaterial()
  material.color.setScalar(intensity * 0.05)
  return material
}

export { RoomEnvironment }
