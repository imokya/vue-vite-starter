import EventEmitter from './eventEmitter'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

import { TextureLoader, CubeTextureLoader } from 'three'
import config from '~/config'

export default class Resource extends EventEmitter {
  constructor(source) {
    super()
    this.source = source
    this.items = {}
    this.toLoad = this.source.length
    this.loaded = 0
    if (this.toLoad === 0) {
      setTimeout(() => {
        this.trigger('ready')
      })
    } else {
      this.setLoaders()
      this.startLoading()
    }
  }

  setLoaders() {
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.dracoLoader = new DRACOLoader()
    this.loaders.dracoLoader.setDecoderPath(`${config.publicPath}static/draco/`)
    this.loaders.dracoLoader.preload()
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
    this.loaders.exrLoader = new EXRLoader()
    this.loaders.textureLoader = new TextureLoader()
    this.loaders.cubeTextureLoader = new CubeTextureLoader()
    this.loaders.ddsLoader = new DDSLoader()
    this.loaders.rgbeLoader = new RGBELoader()
  }

  startLoading() {
    for (const item of this.source) {
      const path = config.publicPath + 'static/' + item.path
      if (item.type == 'gltfModel') {
        this.loaders.gltfLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      } else if (item.type == 'texture') {
        this.loaders.textureLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      } else if (item.type == 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      } else if (item.type == 'exrTexture') {
        this.loaders.exrLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      } else if (item.type == 'ddsTexture') {
        this.loaders.ddsLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      } else if (item.type == 'rgbeTexture') {
        this.loaders.rgbeLoader.load(path, (file) => {
          this.sourceLoaded(item, file)
        })
      }
    }
  }

  sourceLoaded(item, file) {
    this.items[item.name] = file
    this.loaded++
    if (this.loaded === this.toLoad) {
      this.trigger('ready')
    }
  }
}
