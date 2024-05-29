import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/main.scss'
import locale from 'element-plus/dist/locale/zh-cn.js'
import 'highlight.js/styles/monokai-sublime.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/whitey.css'
const app = createApp(App)
const pinia = createPinia().use(persist)
app.use(pinia)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//创建过程中进行登录
const loginForm = {
  username: 'djhhhhhh',
  password: '123456'
}
import { userLoginService } from '@/api/User.js'
import { useTokenStore } from '@/stores/token.js'
const tokenStore = useTokenStore()
const login = async () => {
  let result = await userLoginService(loginForm)
  tokenStore.setToken(result.data)
}

app.use(ElementPlus, { locale }, login())
app.mount('#app')
