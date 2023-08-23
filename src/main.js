import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'

