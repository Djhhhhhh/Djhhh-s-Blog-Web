<script setup>
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.body.style.backgroundImage = ''
})
</script>
<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside width="20%" class="Aside">
        <h1>DJhhh's Blog</h1>
        <el-col style="margin-top: 20%">
          <el-menu class="select">
            <el-menu-item index="1" @click="$router.push('/')">
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="$router.push('/Class')">
              <span>分类</span>
            </el-menu-item>
            <el-menu-item index="3" @click="$router.push('/time')">
              <span>时间轴</span>
            </el-menu-item>
            <el-menu-item index="4" @click="$router.push('/forme')">
              <span>关于我</span>
            </el-menu-item>
            <el-menu-item index="5" @click="$router.push('/talkme')">
              <span>评论</span>
            </el-menu-item>
          </el-menu>
          <span style="color: blue">CodeForces:</span>
          <img src="https://cfrating.baoshuo.dev/rating?username=_Djhhh" />
        </el-col>
      </el-aside>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<style scoped>
.Aside {
  background-color: rgb(122, 115, 116);
  color: palegreen;
}
.select {
  margin-top: 30%;
  background-color: rgba(122, 115, 116, 0.5);
  box-shadow: 0 0 10px 0 rgba(20, 10, 20, 0.8);
}
</style>
