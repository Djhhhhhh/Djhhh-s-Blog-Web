<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.body.style.backgroundImage = ''
})
//文章分类数据模型
const categorys = ref('')
//文章列表数据模型
const articles = ref('')
//分页条数据模型
//TODO：做数据的热加载
const pageNum = ref(1) //当前页
const total = ref(1) //总条数
const pageSize = ref(520) //每页条数
const categoryId = ref('')
const mainElement = ref(null)
//文章列表查询
import { CategoryListService } from '@/api/Category.js'
const getArticleCategoryList = async () => {
  //获取所有分类
  let resultC = await CategoryListService()
  categorys.value = resultC.data
}
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
</script>
<template>
  <el-container>
    <el-header
      style="
        height: auto;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 5px 15px rgba(20, 20, 20, 0.2);
      "
    >
      <el-row>
        <el-col :span="4">
          <el-statistic
            title="_________________"
            value="本网站基本数据"
            style="text-align: center"
          />
        </el-col>
        <el-col :span="4">
          <el-statistic
            title="本网站内文章数量"
            :value="articles.length"
            style="text-align: center"
          />
        </el-col>
        <el-col :span="4">
          <el-statistic
            title="本网站内文章分类数量"
            :value="categorys.length"
            style="text-align: center"
          />
        </el-col>
      </el-row>
    </el-header>
    <el-main ref="mainElement">
      <el-card
        class="box-card"
        v-for="(article, index) in articles"
        :key="index"
        :style="{ animationDelay: index * 0.5 + 's' }"
      >
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
    </el-main>
  </el-container>
</template>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-card {
  position: relative;
  width: 80%;
  margin-top: 2%;
  opacity: 0;
  animation: slideInFromRight 1s ease-out forwards;
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
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
  width: 75px;
  height: 75px;
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
  width: 75px;
  height: 75px;
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
</style>
