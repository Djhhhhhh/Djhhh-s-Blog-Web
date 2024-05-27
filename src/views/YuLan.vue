<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import AvaTar from '@/views/utils/AvaTar.vue'
import '@/assets/whitey.css'
import { EssayFind } from '@/api/Essay.js'
import { onMounted } from 'vue'
import hljs from 'highlight.js'
const route = useRoute()
const articles = ref('')
const getArticles = async () => {
  let result = await EssayFind(route.params.id)
  articles.value = result.data
  articles.value.text = articles.value.text.replace(
    /(<pre ([\s\S]*?)>)([\s\S]*?)(<\/pre>)/g,
    '<pre $2><code>$3</code></pre>'
  )
  document.querySelector('.biaoti').innerHTML = articles.value.name
  document.querySelector('.arc').innerHTML = articles.value.text
  document.querySelector('.msg').innerHTML = ':' + articles.value.message
  document.querySelector('.time').innerHTML = '最后修改时间:' + articles.value.lastup_time
  let h2s = document.getElementsByTagName('h2')
  let text = '<h style="font-size: 3vh;">目录</h>'
  for (let i = 0; i < h2s.length; i++) {
    let h2 = h2s[i]
    let h2Title = h2.innerText || h2.textContent
    h2.id = 'h4_' + i
    text +=
      '<li><a href="#' +
      h2.id +
      '" style="color: #ee2746; text-decoration: none;  font-size: 2.5vh;">' +
      h2Title +
      '</a>'
    let nextH4s = []
    let nextElement = h2.nextElementSibling
    while (nextElement && nextElement.tagName.toLowerCase() !== 'h2') {
      if (nextElement.tagName.toLowerCase() === 'h4') {
        nextH4s.push(nextElement)
      }
      nextElement = nextElement.nextElementSibling
    }
    if (nextH4s.length > 0) {
      text += '<ul style="margin-top:0; margin-bottom:0;">'
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
  let links = document.querySelectorAll('.tp a')
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault()
      let href = this.getAttribute('href')
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    })
  }
  hljs.highlightAll()
}
getArticles()
onMounted(async () => {
  document.getElementById('canvas').style.display = 'none'
})
</script>
<template>
  <AvaTar />
  <el-backtop :right="100" :bottom="100" />
  <div class="common-layout">
    <el-container>
      <el-aside width="460px">
        <div class="h2tp">
          <div class="tp"></div>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <span class="biaoti"></span>
          <span class="msg"></span>
          <div class="time"></div>
        </el-header>
        <el-main>
          <div class="arc"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.msg {
  display: inline-block;
  font-size: 20px;
  width: 600px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time {
  display: inline-block;
  border-bottom: 0.5px solid;
  width: 300px;
}
.biaoti {
  display: inline-block;
  font-size: 70px;
  border-bottom: 0.5vh double;
  animation: bounce 2s infinite;
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
.h2tp {
  position: fixed;
  bottom: 2vh;
  left: 2vw;
  width: 400px;
  border: 0.1vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
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
  text-overflow: ellipsis;
}
.header {
  height: 120px;
}
.arc {
  overflow: auto;
  word-wrap: break-word;
  padding: 0 2vh 0 2vh;
  border-style: double;
  border-width: 0.5vw;
}
</style>
