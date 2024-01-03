<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import '../page/whitey.css'
import AvaTar from '../utils/AvaTar.vue'
import BackTop from '../utils/BackTop.vue'
const route = useRoute()
onBeforeMount(async () => {
  const id = route.params.id
  let html = ref('')
  html.value = await import(`../md/${id}.md`)
  document.querySelector('.arc').innerHTML = html.value.html
  document.querySelector('.biaoti').innerHTML = '《' + id + '》'
  let h2s = document.getElementsByTagName('h2')
  let text = '<h style="font-size: 3vh;">目录</h>'
  // 遍历每个h2标签
  for (let i = 0; i < h2s.length; i++) {
    let h2 = h2s[i]
    // 将h2标签的标题添加到目录中
    let h2Title = h2.innerText || h2.textContent
    h2.id = 'h4_' + i
    text +=
      '<li><a href="#' +
      h2.id +
      '" style="color: #ee2746; text-decoration: none;  font-size: 2.5vh;">' +
      h2Title +
      '</a>'
    // 找到这个h2标签后面的所有h4标签
    let nextH4s = []
    let nextElement = h2.nextElementSibling
    while (nextElement && nextElement.tagName.toLowerCase() !== 'h2') {
      if (nextElement.tagName.toLowerCase() === 'h4') {
        nextH4s.push(nextElement)
      }
      nextElement = nextElement.nextElementSibling
    }
    // 如果有h4标签，创建一个ul
    if (nextH4s.length > 0) {
      text += '<ul style="margin-top:0; margin-bottom:0;">'
      // 将这些h4标签的标题添加到ul中
      for (let j = 0; j < nextH4s.length; j++) {
        let h4Title = nextH4s[j].innerText || nextH4s[j].textContent
        nextH4s[j].id = 'h4_' + i + '_' + j
        text +=
          '<li style="list-style-type:circle;"><a href="#' +
          nextH4s[j].id +
          '" style="text-decoration: none; font-size:2vh; text-shadow: 0 8px 10px #6699FF;">' +
          h4Title +
          '</a></li>'
      }
      text += '</ul>'
    }
    text += '</li>'
  }
  document.querySelector('.tp').innerHTML = text
  // 为所有的链接添加点击事件监听器
  let links = document.querySelectorAll('.tp a')
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      // 阻止链接的默认行为
      event.preventDefault()
      // 获取被点击的链接的href属性值（即锚点的id）
      let href = this.getAttribute('href')
      // 使用scrollIntoView方法平滑滚动到锚点
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    })
  }
})
</script>
<template>
  <div class="biaoti"></div>
  <AvaTar />
  <BackTop />
  <div class="h2tp">
    <div class="tp"></div>
  </div>
  <div class="arc"></div>
</template>
<style scoped>
.h2tp {
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  height: 60vh;
  width: 20vw;
  border: 0.1vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  z-index: -1;
}
.biaoti {
  position: absolute;
  left: 27%;
  font-size: clamp(0.1rem, 4.5vw, 4.5rem);
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
.tp {
  position: relative;
  height: 60vh;
  padding-left: 2vw;
  border-left: double;
  line-height: 2;
  text-decoration: none;
  color: black;
  overflow: auto;
}
.arc {
  position: absolute;
  top: 15vh;
  right: 7vw;
  width: 130vh;
  background-image: url(../picture/04.png);
  padding: 0 2vh 0 2vh;
  border-style: double;
  border-width: 0.5vw;
}
</style>
