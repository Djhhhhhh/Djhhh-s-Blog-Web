<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Avatar from '../utils/AvaTar.vue'
const kinds = [
  {
    name: '题解',
    per: []
  },
  {
    name: '算法',
    per: ['study', '算法学习路线', 'DP', '算法模板']
  },
  {
    name: 'Web前端',
    per: ['Vue', 'AJAX', 'NodeJs', 'VueRouter', 'TypeScript']
  },
  {
    name: 'Web后端',
    per: ['Java', '常用dos命令', 'JAVA数据库课程设计']
  }
]
let showSidebar = ref(false)
let showFy = ref(true)
let currentKind = ref(null)
const Wa = (index) => {
  console.log(index)
  showSidebar.value = !showSidebar.value
  showFy.value = !showFy.value
  currentKind.value = kinds[index]
}
const router = new useRouter()
const TP = (name) => {
  router.push(`/page/YuLan/${name}`)
}
</script>

<template>
  <div class="classify">
    <div class="hole">
      <div class="circle"></div>
    </div>
    <!-- 头像 -->
    <Avatar />
    <!-- 头像 -->
    <transition name="classF" appear>
      <div class="classFy" v-if="showFy">
        <p class="xx">文章分类</p>
        <ul>
          <li class="ki" v-for="(kind, index) in kinds" :key="index" @click="Wa(index)">
            {{ kind.name }}
          </li>
        </ul>
      </div>
    </transition>
    <transition name="rii">
      <div v-if="showSidebar" class="ri" @click="Wa()">
        <ul>
          <p class="xx">{{ currentKind.name }}</p>
          <p class="xxx">点击任意位置消失</p>
          <li class="xxxx" v-for="(per, index) in currentKind.per" :key="index" @click="TP(per)">
            {{ index + 1 }}.{{ per }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<style>
.ri {
  position: absolute;
  right: 2vh;
  top: 2vh;
  height: 95vh;
  width: 55vh;
  border: 0.1vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  overflow: auto;
}
.ri ul li {
  font-size: 4vh;
  margin-bottom: 1vh;
  cursor: pointer;
  transition: 0.5s;
  width: 20vw;
  margin-left: -1vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ri ul li:hover {
  background-color: #eea2a4;
  width: 100%;
}
.rii-enter-active,
.rii-leave-active {
  transition: all 1s ease;
}
.rii-enter-from,
.rii-leave-to {
  transform: translateY(-110%);
}
.xx {
  display: flex;
  justify-content: center;
  font-size: 4vh;
  color: rgba(167, 168, 189, 1);
  text-shadow: 2px 2px #777;
  user-select: none;
}
.xxx {
  display: flex;
  justify-content: center;
  font-size: 2vh;
  color: rgb(93, 99, 158);
  text-shadow: 2px 2px #777;
  user-select: none;
}
.ki {
  margin-left: 1vh;
  margin-bottom: 3vh;
  font-size: 5vh;
  width: 60vh;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
}
.ki:hover {
  background-color: #eea2a4;
  width: 30vh;
}
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: radial-gradient(#020202 10%, #2e3331 40%, #4991a5 80%, rgb(138, 222, 255) 100%);
  width: 15vh;
  height: 15vh;
  border-radius: 100%;
  box-shadow:
    0 0 10px black,
    0 0 20px #ffffff,
    0 0 30px #ffffff;
}
.classFy {
  position: relative;
  top: 10vh;
  left: 20vh;
  width: 82vh;
  height: 80vh;
  border: 0.1vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}
.classF-enter-active,
.classF-leave-active {
  transition: all 1s;
}
.classF-enter-from,
.classF-leave-to {
  transform: translateX(-110%);
}
.hole {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2vw;
  height: 2vh;
  animation: hole 8s linear infinite;
}
.classify {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0) 100%);
}
.hole::before,
.hole::after {
  content: '';
  position: absolute;
  width: 2vw;
  height: 4vh;
  background-color: white;
  transform-origin: center;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
  box-shadow:
    0 0 10px #ffffff,
    0 0 20px #ffffff,
    0 0 30px #ffffff;
}
.hole::before {
  margin-top: -30vh;
  margin-left: 10vw;
}

.hole::after {
  margin-top: 30vh;
  margin-left: -10vw;
}

@keyframes hole {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
