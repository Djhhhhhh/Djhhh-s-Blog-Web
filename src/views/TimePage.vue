<script setup>
import { ref } from 'vue'
//文章分类数据模型
const categorys = ref('')
//文章列表数据模型
const articles = ref('')
//分页条数据模型
const pageNum = ref(1) //当前页
const total = ref(65400) //总条数
const pageSize = ref(65400) //每页条数
const categoryId = ref('')
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
import { useRouter } from 'vue-router'
const router = useRouter()
const zhuanyi = (person) => {
  router.push(`/YuLan/${person.id}`)
}
</script>
<template>
  <el-container>
    <el-main>
      <div class="main">
        <el-timeline style="margin-top: 5%">
          <el-timeline-item
            v-for="(article, index) in articles"
            :key="index"
            :timestamp="article.lastup_time + '  所属分类为:' + article.category_id"
            placement="top"
            style="width: 60%"
          >
            <el-card
              class="card"
              @click="zhuanyi(article)"
              :style="{ animationDelay: index * 0.3 + 's' }"
            >
              <h4>{{ article.name }}</h4>
              <p style="width: 600px">{{ article.message }}</p>
              <p style="text-align: end; margin: 0">--- {{ article.lastup_time }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-main>
  </el-container>
</template>
<style>
.main {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(20, 20, 20, 0.8);
  overflow: auto;
}
.card {
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(230, 210, 213, 0.5);
  transition: 0.3s;
  opacity: 0;
  animation: slideInFromRight 2s ease-out forwards;
}
.card:hover {
  background-color: rgba(147, 181, 207, 0.8);
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(-30%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
