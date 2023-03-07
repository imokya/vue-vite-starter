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

const pinia = createPinia()
const app = createApp(App)

app.use(Toast)
app.use(pinia)
app.use(router)

app.mount('#app')
