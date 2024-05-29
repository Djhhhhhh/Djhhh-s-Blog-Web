<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//文章分类数据模型
const categorys = ref('')
//文章列表数据模型
const articles = ref('')
//分页条数据模型
const pageNum = ref(1) //当前页
const pageSize = ref(3000000) //每页条数
const categoryId = ref('')
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
    state: null
  }
  let result = await EssayList(params)
  articles.value = result.data.data
}
getArticleCategoryList()
let showSidebar = ref(false)
let showFy = ref(true)
let currentKind = ref(null)
const Wa = async (category) => {
  showSidebar.value = !showSidebar.value
  showFy.value = !showFy.value
  currentKind.value = category
  categoryId.value = category.id
  await getArticles()
  console.log(articles.value)
}
const router = new useRouter()
const TP = (id) => {
  router.push(`/YuLan/${id}`)
}
</script>
<template>
  <el-container style="margin: 0">
    <el-main style="margin: 0">
      <div class="classify">
        <transition name="classF" appear>
          <div class="classFy" v-if="showFy">
            <h1 class="xx">文章分类</h1>
            <ul>
              <li
                class="xxxx"
                v-for="(kind, index) in categorys"
                :key="index"
                @click="Wa(categorys[index])"
                :style="{ animationDelay: index * 0.1 + 's' }"
              >
                {{ kind.name }}
              </li>
            </ul>
          </div>
        </transition>
        <transition name="rii">
          <div v-if="showSidebar" @click="Wa()">
            <el-page-header @back="goBack"> </el-page-header>
            <h1 style="margin-top: 0">{{ currentKind.name }}</h1>
            <h2>点击任意位置返回</h2>
            <el-container style="height: 10%">
              <el-main>
                <ul>
                  <li
                    class="xxxx"
                    v-for="(per, index) in articles"
                    :key="index"
                    @click="TP(per.id)"
                    :style="{ animationDelay: index * 0.1 + 's' }"
                  >
                    {{ index + 1 }}.{{ per.name }}
                  </li>
                </ul>
              </el-main>
            </el-container>
          </div>
        </transition>
      </div>
    </el-main>
  </el-container>
</template>
<style>
.classify {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(20, 20, 20, 0.8);
  overflow: auto;
}
.xxxx {
  font-size: 1.5em;
  margin-left: 3%;
  margin-top: 10px;
  opacity: 0;
  cursor: pointer;
  animation: slideInFromRight 1s ease-out forwards;
}
.xxxx:hover {
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 15px rgba(20, 20, 20, 0.5);
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
