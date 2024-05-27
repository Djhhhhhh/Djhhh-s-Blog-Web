<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import Avatar from '@/views/utils/AvaTar.vue'
import github from '../assets/github.png'
onMounted(async () => {
  const handleMouseMove = (e) => {
    const items = document.querySelectorAll('.item')
    const mouseX = e.clientX
    const mouseY = e.clientY
    Array.from(items).forEach((sqr) => {
      const rect = sqr.getBoundingClientRect() // 获取元素的大小和位置
      const xx = rect.left + sqr.offsetWidth / 2 // 元素中心的 x 坐标
      const yy = rect.top + sqr.offsetHeight / 2 // 元素中心的 y 坐标
      const xxx = mouseX - xx
      const yyy = mouseY - yy
      const radians = Math.atan2(yyy, xxx) // 计算鼠标位置和元素中心位置之间的角度
      const angle = (radians * 180) / Math.PI
      sqr.style.transformOrigin = 'left center' // 设置旋转中心为左边框中心
      sqr.style.transform = `rotate(${angle}deg)` // 使用这个角度来旋转元素
    })
  }
  document.addEventListener('mousemove', handleMouseMove)
  document.body.style.background = '#d9a7c7'
  document.body.style.background = '-webkit-linear-gradient(to right, #fffcdc, #d9a7c7)'
  document.body.style.background = 'linear-gradient(to right, #fffcdc, #d9a7c7)'
})

onUnmounted(() => {
  document.body.style.backgroundImage = ''
})
//文章分类数据模型
const categorys = ref('')
//文章列表数据模型
const articles = ref('')
//分页条数据模型
const pageNum = ref(1) //当前页
const total = ref(20) //总条数
const pageSize = ref(5) //每页条数
const categoryId = ref('')
//当每页条数发生了变化，调用此函数
const onSizeChange = (size) => {
  pageSize.value = size
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  getArticles()
}
//当前页码发生变化，调用此函数
const onCurrentChange = (num) => {
  pageNum.value = num
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  getArticles()
}
//文章列表查询
import { CategoryListService } from '@/api/Category.js'
const getArticleCategoryList = async () => {
  //获取所有分类
  let resultC = await CategoryListService()
  categorys.value = resultC.data
}
const message = ref('')
import { MessageListService } from '@/api/Message.js'
const getMessageList = async () => {
  let pp = await MessageListService()
  message.value = pp.data
}
getMessageList()
import { EssayList } from '@/api/Essay.js'
const getArticles = async () => {
  let params = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    category_id: categoryId.value ? categoryId.value : null,
    state: '已发布'
  }
  let result = await EssayList(params)
  articles.value = result.data.data
  total.value = result.data.total
  kind()
}
const kind = () => {
  for (let i in categorys.value) {
    let category = categorys.value[i]
    for (let j in articles.value) {
      if (articles.value[j].category_id == category.id) {
        articles.value[j].category_id = category.name
      }
    }
  }
}
getArticleCategoryList()
getArticles()
const router = useRouter()
const zhuanyi = (person) => {
  router.push(`/YuLan/${person.id}`)
}
let messageShow = ref(false)
let btn = ref(true)
const showMs = () => {
  messageShow.value = !messageShow.value
  btn.value = !btn.value
}
</script>
<template>
  <Avatar />
  <transition name="actionMessage">
    <el-button
      style="
        position: absolute;
        width: 100px;
        height: 200px;
        top: 30%;
        writing-mode: vertical-lr;
        text-align: center;
        align-items: center;
        font-size: 1.4em;
        letter-spacing: 10px;
      "
      v-show="btn"
      @click="showMs"
      text
    >
      公告栏
    </el-button>
  </transition>
  <transition name="actionMessage">
    <el-timeline class="message" v-show="messageShow">
      <el-text style="font-size: 3em">公告栏</el-text>
      <el-button text @click="showMs" style="margin-left: 20px; font-size: 0.8em">隐藏</el-button>
      <el-timeline-item
        v-for="(msg, index) in message"
        :key="index"
        :timestamp="msg.updata_time"
        placement="top"
      >
        <el-card style="width: auto; max-width: 250px; max-height: 100px; overflow: auto">
          <el-text style="font-size: 1.3em">
            {{ msg.text }}
          </el-text>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </transition>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-icon style="width: 40px; margin-right: 20px"><Sunrise /></el-icon>
        <a href="https://github.com/">
          <el-image :src="github" style="width: 40px; margin-right: 20px"></el-image>
        </a>
        <el-icon style="width: 40px; margin-right: 20px"><Sunrise /></el-icon>
        <el-image src="https://cfrating.baoshuo.dev/rating?username=_Djhhh">CF</el-image>
      </el-header>
      <el-main class="main">
        <div class="main-box">
          <el-card class="box-card" v-for="(article, index) in articles" :key="index">
            <template #header>
              <div class="card-header">
                <el-text style="font-size: 1.4em; cursor: pointer" @click="zhuanyi(article)">
                  {{ article.name }}
                </el-text>
                <div>
                  <el-tag>{{ article.category_id }}</el-tag>
                </div>
                <el-button class="button" text @click="zhuanyi(article)">
                  <el-icon><InfoFilled /></el-icon>了解详情
                </el-button>
              </div>
            </template>
            <div class="content">
              <el-image
                style="width: 30%; height: 200px"
                :src="article.photo"
                fit="contain"
                loading="lazy"
              ></el-image>
              <el-text class="msg">&emsp;"{{ article.message }}"</el-text>
            </div>
            <div style="margin: 0; width: 100%; text-align: end; font-size: 0.7em">
              最后更新时间为：{{ article.lastup_time }}
            </div>
          </el-card>
        </div>
        <el-pagination
          v-model:current-page="pageNum"
          v-model:page-size="pageSize"
          :page-sizes="[3, 5, 10, 15]"
          layout="jumper, total, sizes, prev, pager, next"
          background
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentChange"
          style="margin-top: 20px"
        />
      </el-main>
    </el-container>
  </div>
  <div class="shell">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 60vw;
  min-height: 90vh;
  border-left: solid;
  border-right: solid;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 19px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  position: relative;
  width: 40vw;
  margin-top: 20px;
}

.content {
  display: flex;
  flex-direction: row;
}
.msg {
  margin-left: 10%;
  height: 100px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  border-bottom: solid;
}
.message {
  position: absolute;
  bottom: 200px;
  left: 20px;
  width: auto;
  height: auto;
}
.actionMessage-enter-active,
.actionMessage-leave-active {
  transition: all 0.3s ease;
}
.actionMessage-enter-from,
.actionMessage-leave-to {
  transform: translateX(-100%);
}
.button {
  color: rgb(151, 151, 151);
  background: #fff;
  border-radius: 4px;
  width: 100px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.6s;
  border: 2px;
}
.button:hover {
  font-size: 0.8em;
  color: black;
  border-radius: 16px;
  box-shadow: 0 2px 15px #222;
}

.box-card::before {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  transition: 0.3s;
  backdrop-filter: blur(10px);
  border-radius: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: animate 2s ease-in-out infinite;
}

.box-card:hover::before {
  opacity: 1;
  top: -50px;
  left: 150px;
  width: 100px;
  height: 100px;
}

.box-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: 0.5s;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
  animation: animate 2s ease-in-out infinite;
  animation-delay: -1s;
}

.box-card:hover::after {
  bottom: -50px;
  right: 150px;
  width: 100px;
  height: 100px;
  opacity: 1;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(10px);
  }
  50% {
    transform: translate(-10px);
  }
}
.shell {
  display: grid;
  position: absolute;
  bottom: -130px;
  right: 20px;
  grid-template-columns: repeat(4, 30px);
  grid-template-rows: repeat(4, 40px);
  grid-gap: 1.5rem;
}
.item {
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-top: 10px solid transparent;
  border-left: 15px solid #fff;
  border-bottom: 10px solid transparent;
}
</style>
