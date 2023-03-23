import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import '@fontsource/roboto'

import App from './App.vue'
import './assets/main.css'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app.use(createPinia())
app.use(createRouter({
  history: createWebHistory(),
  routes: [],
}))
app.use(VueFullPage)

app.mount('#app')
