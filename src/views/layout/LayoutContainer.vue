<script setup>
import AvaTar from '../utils/AvaTar.vue'
import BackTop from '../utils/BackTop.vue'
</script>

<template>
  <AvaTar />
  <BackTop />
  <div class="Main" @click="closeSidebar">
    <div class="top-text1">小董的Blogs</div>
    <div class="top-text2">有点一点点答辩</div>
    <transition name="aa" appear>
      <div class="text">
        <transition-group name="typewriter" appear>
          <p class="per1" key="1">物理学是人类史上最极致的浪漫</p>
          <p class="per2" key="2">“天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。”</p>
          <p class="per3" key="2">———《滕王阁序》</p>
        </transition-group>
      </div>
    </transition>
    <div class="foot">下拉查看更多内容</div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
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
  font-size: clamp(0.7rem, 4vw, 3rem);
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
  font-size: clamp(0.1rem, 2vw, 1rem);
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
.text {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 30vh;
  border-top: double 5px white;
  border-bottom: double 5px white;
  user-select: none;
}

.text .per1 {
  display: flex;
  justify-content: center;
  font-size: clamp(0.1rem, 2vw, 1rem);
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  user-select: none;
}
.text .per2 {
  display: flex;
  justify-content: center;
  font-size: clamp(0.1rem, 2vw, 2.3rem);
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  user-select: none;
}
.text .per3 {
  display: flex;
  justify-content: center;
  font-size: clamp(0.1rem, 2vw, 1.5rem);
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  font-style: italic; /* 第二个段落的字体为斜体 */
  user-select: none;
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
  width: 4.5vw;
  height: 9vh;
  border: 0.2vh solid #766d6d;
}

.text::before {
  top: -8vh;
  left: -4vw;
  animation: animateTop 6s linear infinite;
}

.text::after {
  bottom: -8vh;
  right: -4vw;
  animation: animateBottom 6s linear infinite;
}

@keyframes animateTop {
  0% {
    left: -2.5vw;
  }
  50% {
    left: calc(100% - 2.5vw);
    transform: rotate(90deg);
  }
  100% {
    left: -2.5vw;
    transform: rotate(180deg);
  }
}

@keyframes animateBottom {
  0% {
    right: -2.5vw;
  }
  50% {
    right: calc(100% - 2.5vw);
    transform: rotate(90deg);
  }
  100% {
    right: -2.5vw;
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
  font-size: clamp(0.1rem, 2vw, 1.5rem);
}
</style>
