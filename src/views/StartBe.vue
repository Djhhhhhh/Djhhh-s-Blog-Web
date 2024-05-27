<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import bgc from '../assets/blackbgc.webp'
onMounted(async () => {
  document.body.style.backgroundImage = `url(${bgc})`
})

onUnmounted(() => {
  document.body.style.backgroundImage = ''
})
import { useRouter } from 'vue-router'

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
const router = new useRouter()
const TP = async () => {
  expandBoxes()
  login()
  await new Promise((resolve) => setTimeout(resolve, 2000))
  router.push(`/mainper`)
}
const box1 = ref(null)
const box2 = ref(null)
const expandBoxes = () => {
  box1.value.style.borderWidth = '150px'
  box1.value.style.transition = 'border-width 3s'
  box2.value.style.borderWidth = '30px'
  box2.value.style.transition = 'border-width 3s'
}
</script>

<template>
  <div class="H">Djhhh' 的博客</div>
  <div class="box1" ref="box1"></div>
  <div class="box2" ref="box2"></div>
  <el-button class="btn" circle @click="TP()">Eeter</el-button>
</template>

<style scoped>
.H {
  position: absolute;
  top: 10%;
  left: 25%;
  font-size: 4em;
  font-weight: bolder;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  -webkit-text-fill-color: transparent;
}
@keyframes rotateB {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotateA {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
.box1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: double;
  border-top: 20px double rgba(255, 0, 0, 0.7);
  border-bottom: 20px double rgba(255, 0, 0, 0.7);
  border-left: 20px double rgba(0, 0, 0, 0.7);
  border-right: 20px double rgba(0, 0, 0, 0.7);
  animation: rotateB 6s linear infinite;
}
.box2 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: double;
  border-top: 20px double rgba(255, 0, 0, 0.7);
  border-bottom: 20px double rgba(255, 0, 0, 0.7);
  border-left: 20px double rgba(0, 0, 0, 0.7);
  border-right: 20px double rgba(0, 0, 0, 0.7);
  animation: rotateA 6s linear infinite;
}
.btn {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow:
    0 0 10px white,
    0 0 20px black,
    0 0 30px black;
}
</style>
