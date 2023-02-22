import 'vant/lib/index.css'
import './style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { Toast } from 'vant'
import { createPinia } from 'pinia'

// create three.js canvas
// import Experience from '@/experience/experience'
// const experience = new Experience(document.querySelector('#canvas'))

// rem adapter
const rootFontSize = 16
const designWidth = 375
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize =
  (deviceWidth * rootFontSize) / designWidth + 'px'

const pinia = createPinia()
const app = createApp(App)
app.use(Toast)
app.use(pinia)
app.use(router)

app.mount('#app')
