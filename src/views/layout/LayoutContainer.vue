<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
console.log(useRouter)
// 控制侧边栏的显示或隐藏
let isSidebarOpen = ref(false)
let profileImagePosition = ref('initial')
// 切换侧边栏的显示或隐藏
const toggleSidebar = () => {
  isSidebarOpen.value = true
  profileImagePosition.value = 'sidebar'
}
// 关闭侧边栏
const closeSidebar = () => {
  isSidebarOpen.value = false
  profileImagePosition.value = 'initial'
}
const router = new useRouter()
const pagetp1 = () => {
  router.push('/article/mainper')
}
const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
const scrollFunction = () => {
  console.log(121)
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector('.top').style.display = 'block'
  } else {
    document.querySelector('.top').style.display = 'none'
  }
}
window.onscroll = function () {
  scrollFunction()
}
</script>

<template>
  <div class="Main" @click="closeSidebar">
    <div class="top-text1">小董的Blogs</div>
    <div class="top-text2">有点一点点答辩</div>
    <div class="xuan" :offset="120">
      <img
        class="profile-image"
        :class="profileImagePosition"
        src="../picture/hh.jpg"
        @click.stop="toggleSidebar"
      />
      <transition name="slide">
        <div class="sidebar" v-show="isSidebarOpen">
          <div class="kk">导航栏</div>
          <ul>
            <li class="daohang" @click="pagetp1">首页</li>
            <li class="daohang" @click="pagetp2">asdhahd</li>
            <li class="daohang" @click="pagetp3">asdhkad</li>
            <li class="daohang" @click="pagetp4">asdhkad</li>
            <li class="daohang" @click="pagetp5">asdhkahd</li>
          </ul>
        </div>
      </transition>
    </div>
    <transition name="aa" appear>
      <div class="text">
        <transition-group name="typewriter" appear>
          <p class="per1" key="1">DJH</p>
          <p class="per2" key="2">不积跬步，无以至千里。不积小流，无以成江海。</p>
          <p class="per3" key="2">《劝学篇》—— 荀子</p>
        </transition-group>
      </div>
    </transition>
    <div class="foot">下拉查看更多内容</div>
  </div>
  <button class="top" @click="topFunction">Top</button>
  <router-view></router-view>
</template>

<style scoped>
.top {
  position: fixed;
  bottom: 7vh;
  right: 2vw;
  width: 4vw;
  height: 4vh;
  border-radius: 100%;
  cursor: pointer;
  display: none;
}
.top:hover {
  animation: btn 2s infinite;
}
@keyframes btn {
  0% {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1);
  }
  50% {
    background-color: rgba(237, 90, 101, 0.5);
    transform: scale(1.3);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1);
  }
}
/* 全局背景 */
.Main {
  position: absolute;
  background-size: 100% 100%;
  background-image: linear-gradient(315deg, #131417 0%, #1e1f26 74%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
/* 新增的文字样式 */
.top-text1 {
  position: absolute;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-shadow: 2px 2px #777;
  font-size: 6vh;
  animation: fadeIn 3s;
  /* 让动画重复进行 */
  animation-iteration-count: infinite;
}
.top-text2 {
  position: absolute;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  color: #636466;
  text-shadow: 2px 2px #777;
  font-size: 1.9vh;
}
@keyframes fadeIn {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
/* 扩展导航栏上方空位 */
.kk {
  position: relative;
  display: flex;
  top: 5vh;
  left: 3vh;
  justify-content: flex-start;
  width: 15vw;
  height: 15vh;
  font-size: 4vh;
  text-align: center;
  background: -webkit-linear-gradient(top, #e9ccd3, #00ff00);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 8px 10px #6699ff;
  animation: swing 2s infinite;
}
@keyframes swing {
  /*创建动画*/
  20% {
    -webkit-transform: rotate(1deg);
  }
  40% {
    -webkit-transform: rotate(-1deg);
  }
  60% {
    -webkit-transform: rotate(2deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
/* 去除图片光标 */
.xuan {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* 照片样式 */
.profile-image {
  position: fixed;
  top: 10vh;
  left: 10vh;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  box-shadow:
    0 0 10px #f56c6c,
    0 0 20px #f56c6c,
    0 0 30px #f56c6c;
  cursor: pointer;
  transition: 0.5s;
}

.profile-image.sidebar {
  position: fixed;
  z-index: 2;
  border-radius: 20%;
  top: 5vh;
  left: 25vh;
  width: 9vh;
  height: 9vh;
  box-shadow:
    0 0 10px #67c23a,
    0 0 20px #409eff,
    0 0 30px #e6a23c;
  cursor: pointer;
  transition: 0.5s;
}
/* 设定鼠标悬浮特效 */
.profile-image:hover {
  transform: rotate(20deg) scale(1.5);
  transition: 0.5s;
}
/* 侧边栏样式 */
.sidebar {
  height: 100%;
  width: 40vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(216, 217, 212, 0.5);
  overflow-x: hidden;
}
/* 侧边栏内部字体大小 */
.daohang {
  cursor: pointer;
  font-size: 3vh;
  line-height: 2;
  transition: 0.5s;
  color: #36292f;
  font-weight: bolder;
  animation: flicker 1s infinite;
  opacity: 0.8;
}
.daohang:hover {
  background-color: #eea2a4;
  width: 30vh;
}
/* 设定侧边栏进出动画 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.text {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 30vh;
  border-top: double 5px white;
  border-bottom: double 5px white;
  transition: 0.5s;
}

.text .per1 {
  display: flex;
  justify-content: center;
  font-size: 2vh;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
}
.text .per2 {
  display: flex;
  justify-content: center;
  font-size: 4.5vh;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
}
.text .per3 {
  display: flex;
  justify-content: center;
  font-size: 3vh;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  font-style: italic; /* 第二个段落的字体为斜体 */
}

/* 页面刷新动画 */
.aa-enter-active {
  transition: height 2s;
}
.aa-enter-from {
  height: 0;
}
.typewriter-enter-active {
  animation: typewriter 6s;
}
.typewriter-enter-from {
  width: 0;
  overflow: hidden;
}

@keyframes typewriter {
  from {
    color: rgba(255, 255, 255, 0);
  }
  to {
    color: rgba(255, 255, 255, 1);
  }
}

.text::before,
.text::after {
  content: '';
  position: absolute;
  width: 9vh;
  height: 9vh;
  border: 0.2vh solid #766d6d;
}

.text::before {
  top: -8vh;
  left: -8vh;
  animation: animateTop 6s linear infinite;
}

.text::after {
  bottom: -8vh;
  right: -8vh;
  animation: animateBottom 6s linear infinite;
}

@keyframes animateTop {
  0% {
    left: -5vh;
  }
  50% {
    left: calc(100% - 5vh);
    transform: rotate(90deg);
  }
  100% {
    left: -5vh;
    transform: rotate(180deg);
  }
}

@keyframes animateBottom {
  0% {
    right: -5vh;
  }
  50% {
    right: calc(100% - 5vh);
    transform: rotate(90deg);
  }
  100% {
    right: -5vh;
    transform: rotate(180deg);
  }
}

.foot {
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: center;
  background-color: #909399;
  color: #15509e;
  opacity: 0.1;
  font-size: 3vh;
}
</style>
