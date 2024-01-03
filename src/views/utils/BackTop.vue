<script setup>
import { ref } from 'vue'
const back_top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const buttonShow = ref(false)
window.onscroll = () => {
  let height = ref(document.documentElement.scrollTop || document.body.scrollTop)
  console.log(height.value)
  if (height.value < 500) buttonShow.value = false
  else buttonShow.value = true
}
</script>
<template>
  <transition name="back_top_apper_hiden">
    <button class="back_top" @click="back_top" v-show="buttonShow">Up</button>
  </transition>
</template>
<style>
.back_top_apper_hiden-enter-active,
.back_top_apper_hiden-leave-active {
  transition: all 1s ease;
}
.back_top_apper_hiden-enter-from,
.back_top_apper_hiden-leave-to {
  transform: translateX(300%);
}
.back_top {
  position: fixed;
  right: 1.5vw;
  bottom: 2.5vh;
  width: 4vw;
  height: 8vh;
  border: 2px solid white;
  border-radius: 50%;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  box-shadow:
    0 0 10px black,
    0 0 20px black,
    0 0 30px black;
  cursor: pointer;
  color: white;
  font-size: clamp(0.1rem, 2vw, 1.5rem);
  font-weight: bolder;
  text-align: center;
  z-index: 999;
  user-select: none;
}
.back_top:hover {
  animation: back_xuanzhuan 1s infinite;
}
@keyframes back_xuanzhuan {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(0px, -2vh);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
