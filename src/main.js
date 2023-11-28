import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import pinia from './stores/index'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(pinia)
app.use(createPinia())
app.use(router)
app.use(createPinia().use(persist))

app.mount('#app')
