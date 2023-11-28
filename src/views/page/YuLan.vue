<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import '../page/whitey.css'
const route = useRoute()
const id = route.params.id
let html = ref('')
const router = useRouter()
const tui = () => {
  router.push('/article/mainper')
}
const pagetp1 = () => {
  router.push('/article/mainper')
}
const topFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
const scrollFunction = () => {
  console.log(121)
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector('.top').style.display = 'block'
  } else {
    document.querySelector('.top').style.display = 'none'
  }
}
window.onscroll = function () {
  scrollFunction()
}
onBeforeMount(async () => {
  html.value = await import(`../md/${id}.md`)
  document.querySelector('.arc').innerHTML = html.value.html
  document.querySelector('.biaoti').innerHTML = '《' + id + '》'
  let paragraphs = document.getElementsByTagName('h2')
  let text = '<h class="lu">目录</h>'
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].id = 'para' + i
    text +=
      '<li><a href="#para' +
      i +
      '">' +
      (paragraphs[i].innerText || paragraphs[i].textContent) +
      '</a></li>'
  }
  document.querySelector('.tp').innerHTML = text
})
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
</script>
<template>
  <div class="biaoti"></div>
  <div class="xuan" :offset="120" @click="closeSidebar">
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
  <div class="tp"></div>
  <div class="arc"></div>
  <button class="tui" @click="tui">返回</button>
  <button class="top" @click="topFunction">Top</button>
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
.biaoti {
  position: absolute;
  left: 27%;
  font-size: 8vh;
  border-bottom: 0.5vh double;
  animation: bounce 2s infinite; /*设置动画*/
}
@keyframes bounce {
  /*创建动画*/
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
  }
}
.tui {
  position: absolute;
  top: 2vh;
  right: 2vh;
  width: 10vh;
  height: 10vh;
  border-radius: 100%;
  border-style: solid;
  font-size: 2vh;
  box-shadow:
    0 0 10px #6ef56c,
    0 0 20px #dcf56c,
    0 0 30px #8af56c;
  background-color: rgba(255, 255, 255, 0.2);
  color: red;
  background-color: #fff;
  cursor: pointer;
}
.tui:hover {
  animation: btn 2s infinite;
}
.tui::after {
  position: absolute;
  background-color: black;
  width: 20vh;
  height: 20vh;
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
.tp {
  position: absolute;
  top: 40vh;
  left: 5vw;
  width: 30vh;
  height: 60vh;
  font-size: 2.5vh;
  padding-left: 2vw;
  border-left: double;
  line-height: 2;
  text-decoration: none;
  color: red;
}
.arc {
  position: absolute;
  top: 15vh;
  right: 7vw;
  width: 130vh;
  background-color: rgba(240, 201, 207, 0.2);
  padding: 0 2vh 0 2vh;
  border-style: double;
  border-width: 0.5vw;
}

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
</style>
