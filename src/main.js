import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '@/router'
import { Toast } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(Toast)
app.use(router)

app.mount('#app')
