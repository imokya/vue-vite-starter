import Experience from './experience'
import {
  WebGLRenderer,
  sRGBEncoding,
  BasicShadowMap,
  ACESFilmicToneMapping,
  ReinhardToneMapping,
  PCFSoftShadowMap,
  PCFShadowMap,
  Vector2
} from 'three'
import util from './utils'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { SAOPass } from 'three/addons/postprocessing/SAOPass.js'
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js'
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js'
import { GammaCorrectionShader } from 'three/addons/shaders/GammaCorrectionShader.js'

const postprocessingOn = false

export default class Renderer {
  constructor() {
    this.experience = new Experience()
    this.size = this.experience.size
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera

    this.setInstance()
    if (postprocessingOn) {
      this.setPostProcessing()
    }
  }

  setPostProcessing() {
    const renderScene = new RenderPass(this.scene, this.camera.instance)

    const ssaoPass = new SSAOPass(
      this.scene,
      this.camera.instance,
      window.innerWidth,
      window.innerHeight
    )
    ssaoPass.kernelRadius = 0.01
    ssaoPass.minDistance = 0.0001

    this.composer = new EffectComposer(this.instance)
    this.composer.addPass(renderScene)
    this.composer.addPass(ssaoPass)
  }

  setInstance() {
    this.instance = new WebGLRenderer({
      canvas: this.canvas,
      antialias: !util.isMobile(),
      alpha: true,
      logarithmicDepthBuffer: false,
      powerPreference: 'high-performance'
    })
    this.instance.physicallyCorrectLights = false
    this.instance.outputEncoding = sRGBEncoding
    // this.instance.shadowMap.autoUpdate = true
    // this.instance.toneMapping = ReinhardToneMapping
    // this.instance.toneMappingExposure = 1.2
    this.instance.shadowMap.enabled = true
    this.instance.shadowMap.type = PCFShadowMap
    this.instance.setPixelRatio(this.size.pixelRatio)
    this.instance.setSize(this.size.width, this.size.height)
  }

  resize() {
    this.instance.setSize(this.size.width, this.size.height)
    this.instance.setPixelRatio(Math.min(this.size.pixelRatio, 2))
    if (this.composer) {
      this.composer.setSize(this.size.width, this.size.height)
    }
  }

  update() {
    // console.log(this.instance.info.render.calls)
    if (!postprocessingOn) {
      this.instance.render(this.scene, this.camera.instance)
    } else {
      if (this.composer) {
        this.composer.render()
      }
    }
  }
}
