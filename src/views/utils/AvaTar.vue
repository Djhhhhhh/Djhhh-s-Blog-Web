<script setup>
// 以下都是头像
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 控制侧边栏的显示或隐藏
let isSidebarOpen = ref(false)
let profileImagePosition = ref('initial')
const router = new useRouter()
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
const pagetp1 = () => {
  topFunction()
  router.push('/article/mainper')
}
const pagetp2 = () => {
  router.push('/classify/class')
}
const pagetp3 = () => {
  router.push('/Time/time')
}
const pagetp4 = () => {
  router.push('/talk/me')
}
const pagetp5 = () => {
  router.push('/For/me')
}
const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
// 以上都是头像
</script>
<template>
  <!-- 以下都是头像 -->
  <div class="xuan" :offset="120" @click="closeSidebar">
    <img
      class="profile-image"
      :class="profileImagePosition"
      src="../picture/hh.jpg"
      @click.stop="toggleSidebar"
    />
    <transition name="slide">
      <div class="sidebar" v-show="isSidebarOpen">
        <div class="navigation">导航栏</div>
        <ul>
          <li class="daohang" @click="pagetp1">首页</li>
          <li class="daohang" @click="pagetp2">分类</li>
          <li class="daohang" @click="pagetp3">时间轴</li>
          <li class="daohang" @click="pagetp4">评论</li>
          <li class="daohang" @click="pagetp5">关于我</li>
        </ul>
      </div>
    </transition>
  </div>
  <!-- 以上都是头像 -->
</template>
<style>
/* 以下都是头像 */
.navigation {
  position: relative;
  display: flex;
  top: 5vh;
  left: 1.5vw;
  justify-content: flex-start;
  width: 15vw;
  height: 15vh;
  font-size: clamp(1rem, 2vw, 2rem);
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
  left: 5vw;
  width: 7.5vw;
  height: 15vh;
  border-radius: 50%;
  box-shadow:
    0 0 10px #f56c6c,
    0 0 20px #f56c6c,
    0 0 30px #f56c6c;
  cursor: pointer;
  transition: 0.5s;
  z-index: 999;
}

.profile-image.sidebar {
  position: fixed;
  z-index: 2;
  border-radius: 20%;
  top: 5vh;
  left: 12.5vw;
  width: 4.5vw;
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
  width: 20vw;
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
  font-size: clamp(0.7rem, 2vw, 1.5rem);
  line-height: 2;
  transition: 0.5s;
  color: #36292f;
  font-weight: bolder;
  animation: flicker 1s infinite;
  opacity: 0.8;
}
.daohang:hover {
  background-color: #eea2a4;
  width: 15vw;
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
/* 以上都是头像 */
</style>
