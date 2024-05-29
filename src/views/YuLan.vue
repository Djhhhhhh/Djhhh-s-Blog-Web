<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
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
  <el-container>
    <el-header>
      <el-collapse
        v-model="activeNames"
        @change="handleChange"
        style="width: 30%; display: inline-block"
      >
        <el-collapse-item title="导航栏">
          <div class="tp"></div>
        </el-collapse-item>
      </el-collapse>
    </el-header>
    <el-main>
      <div class="main">
        <el-container>
          <el-header style="height: auto">
            <span class="biaoti"></span>
            <div class="time"></div>
          </el-header>
          <el-main>
            <div class="arc"></div>
          </el-main>
        </el-container>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
.tp {
  position: relative;
  height: 50vh;
  padding-left: 2vw;
  border-left: double;
  line-height: 2;
  text-decoration: none;
  color: black;
  overflow: auto;
  text-overflow: ellipsis;
  border: 0.1vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  z-index: 100;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(20, 20, 20, 0.8);
  overflow: auto;
}
.time {
  display: block;
  text-align: center;
  /* animation: slideInFromRight 3s ease-out forwards; */
}
.biaoti {
  font-size: 70px;
  text-align: center;
  display: block;
  /* animation: slideInFromRight 3s ease-out forwards; */
}
.header {
  height: 120px;
}
.arc {
  overflow: auto;
  word-wrap: break-word;
  padding: 0 2vh 0 2vh;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(20, 20, 20, 0.2);
  animation: slideInFromRight 1.5s ease-out forwards;
}
@keyframes slideInFromRight {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
