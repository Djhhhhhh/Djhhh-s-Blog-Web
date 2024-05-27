<script setup>
import AvaTar from '@/views/utils/AvaTar.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import bgc from '../assets/blackbgc.webp'
onMounted(async () => {
  document.body.style.backgroundImage = `url(${bgc})`
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
  <AvaTar />
  <el-timeline class="hide-scrollbar">
    <el-timeline-item
      v-for="(article, index) in articles"
      :key="index"
      :timestamp="article.lastup_time + '  所属分类为:' + article.category_id"
      placement="top"
    >
      <el-card class="card" @click="zhuanyi(article)">
        <h4>{{ article.name }}</h4>
        <p style="width: 600px">{{ article.message }}</p>
        <p style="text-align: end; margin: 0">--- {{ article.lastup_time }}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
<style>
.hide-scrollbar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
  height: 800px;
  overflow-y: auto;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.card {
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* 对 Safari 的兼容 */
  background-color: rgba(255, 255, 255, 0.5); /* 半透明的白色背景 */
  transition: 0.3s;
}
.card:hover {
  background-color: rgba(255, 255, 255, 0.8); /* 半透明的白色背景 */
}
</style>
