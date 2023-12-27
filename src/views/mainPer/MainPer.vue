<script setup>
import img1 from '../picture/01.jpg'
import img2 from '../picture/02.jpg'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const persons = [
  {
    src: img2,
    name: 'JAVA数据库课程设计',
    mmain: '课设的实现与总结',
    time: '2023.12.21'
  },
  {
    src: img2,
    name: '算法模板',
    mmain: '整理了作者所学过的所有算法与数据结构,并且可以尝试应付下期末考试',
    time: '2023.12.12'
  },
  { src: img2, name: 'Java', mmain: '学习java,后端的路才刚刚开始', time: '2023.12.12' },
  {
    src: img1,
    name: '蓝桥杯报名流程',
    mmain: '蓝桥杯报名详细流程以及注意事项',
    time: '2023.11.20'
  },
  { src: img2, name: '算法学习路线', mmain: '算法协会新生学习建议', time: '2023.11.20' },
  { src: img2, name: 'DP', mmain: '动态规划真是太难了', time: '2023.11.20' },
  { src: img2, name: 'AJAX', mmain: '异步交互技术', time: '2023.11.20' },
  { src: img2, name: 'VueRouter', mmain: 'Vue中路由细节', time: '2023.11.20' },
  { src: img2, name: 'TypeScript', mmain: 'JS增强版,但是现在感觉没啥用了', time: '2023.11.20' },
  { src: img2, name: 'NodeJs', mmain: 'nodejs nb', time: '2023.11.20' },
  { src: img2, name: '常用dos命令', mmain: 'dos命令!', time: '2023.11.20' }
]

let currentPage = ref(1)
const itemsPerPage = 6
let add = () => {
  currentPage.value++
  if (currentPage.value * itemsPerPage >= persons.length + itemsPerPage) currentPage.value--
}
let dda = () => {
  currentPage.value--
  if (currentPage.value < 1) currentPage.value++
}
let currentItems = computed(() => {
  let start = (currentPage.value - 1) * itemsPerPage
  let end = currentPage.value * itemsPerPage
  return persons.slice(start, end)
})
const router = useRouter()
const zhuanyi = (person) => {
  router.push(`/page/YuLan/${person.name}`)
}
</script>
<template>
  <div class="box">
    <div
      class="peryl"
      v-for="(person, index) in currentItems"
      @click="zhuanyi(person)"
      :key="index"
      :style="{ 'background-image': 'url(' + person.src + ')' }"
    >
      <div class="a" :style="{ 'background-image': 'url(' + person.src + ')' }"></div>
      <div class="b" :style="{ 'background-image': 'url(' + person.src + ')' }"></div>
      <div class="c" :style="{ 'background-image': 'url(' + person.src + ')' }"></div>
      <div class="d" :style="{ 'background-image': 'url(' + person.src + ')' }"></div>
      <p class="e">{{ person.name }}</p>
      <p class="f">{{ person.mmain }}</p>
      <p>{{ person.time }}</p>
    </div>
  </div>
  <div class="my">
    <div class="content">公告栏</div>
    <div class="news">
      <ul>
        <li>走出自己的安逸区，敢于去迈上更高的人生台阶</li>
        <li>这个博客的后端一时半会都出不来:(</li>
        <li>前端代码仍在努力优化过程中,能封装的全在封装了</li>
        <li>有点过度写css样式了</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="nper">近期文章</div>
    <div v-for="(now, index) in persons.slice(0, 6)" :key="index" class="now" @click="zhuanyi(now)">
      {{ now.time }}—{{ now.name }}
    </div>
  </div>
  <div class="pagination-buttons">
    <button class="btn" @click="dda()">上一页</button>
    <button class="btn" @click="add()">下一页</button>
  </div>
</template>
<style scoped>
.box {
  position: absolute;
  top: 100vh;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
.my {
  position: absolute;
  top: 120vh;
  right: 0;
  bottom: 0;
  left: 5vh;
  width: 20%;
  height: 90vh;
  z-index: -1;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: rgba(167, 168, 189, 0.1);
  border-radius: 2vh;
  box-shadow: 2vh 2vh 2vh rgba(0, 0, 0, 0.5);
  border-top: 2vh solid rgba(255, 255, 255, 0.5);
  border-left: 2vh solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
}

.content {
  display: flex;
  font-size: 5vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  color: rgba(167, 168, 189, 0.5);
  text-shadow: 2px 2px #777;
}

.news {
  margin-top: 2vh;
  font-size: 2vh;
  height: 40vh;
  width: 100%;
  overflow: hidden;
}

.news ul li {
  margin-bottom: 2vh;
}

.nper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
  width: 100%;
  height: 4vh;
  overflow: hidden;
  color: rgba(167, 168, 189, 0.5);
  text-shadow: 2px 2px #777;
}
.peryl {
  position: relative;
  display: flex;
  float: right;
  margin-top: 4vh;
  margin-right: 10vw;
  width: 60vw;
  height: 30vh;
  border-style: double;
  border-color: black;
  background-image: url(../picture/hh.jpg);
  background-size: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 1;
  flex-direction: column;
  cursor: pointer;
}

.now {
  text-indent: 1vw;
  text-align: left;
  width: 80%;
  height: 3vh;
  margin-top: 2vh;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 2vh;
  transition: 0.5s;
  cursor: pointer;
  border-left: 1vh double #000000;
}

.now:hover {
  background-color: #eea2a4;
  width: 90%;
}

.a,
.b,
.c,
.d {
  position: absolute;
  width: 30vw;
  height: 30vh;
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0));
  background-size: cover;
  opacity: 0.7;
  transition: 1s;
}
.a::after,
.b::after,
.c::after,
.d::after {
  content: '';
  position: absolute;
  width: 60vw;
  height: 30vw;
}
.a {
  left: 5vw;
  transform: rotateZ(100deg);
  overflow: hidden;
}
.a::after {
  transform: rotateY(-100deg);
}
.b {
  left: 5vw;
  transform: rotateZ(-100deg);
  overflow: hidden;
}
.b::after {
  transform: rotateY(100deg);
}
.c {
  right: 5vw;
  transform: rotateZ(-100deg);
  overflow: hidden;
}
.c::after {
  transform: rotateY(-100deg);
}
.d {
  right: 5vw;
  transform: rotateZ(100deg);
  overflow: hidden;
}
.d::after {
  transform: rotateY(-100deg);
}

.peryl:hover .a {
  left: -4vw;
}
.peryl:hover .b {
  left: -4vw;
}
.peryl:hover .c {
  right: -4vw;
}

.peryl:hover .d {
  right: -4vw;
}

.e {
  opacity: 0.5;
  font-size: 60px;
  text-align: center;
  font-size: 5vh;
  transition: 1s;
  color: rgb(0, 0, 0);
}

.peryl:hover .e {
  font-size: 3vh;
  opacity: 1;
}
.f {
  opacity: 0;
  transition: 1s;
  overflow: hidden;
  z-index: 2;
}
.peryl:hover .f {
  opacity: 1;
}

.pagination-buttons {
  position: absolute;
  bottom: -15vh;
  left: 2.5vw;
  width: 50vh;
}
.btn {
  position: relative;
  border-radius: 4vh;
  background-color: rgba(255, 255, 255, 0.1);
  width: 20vh;
  margin-right: 4vh;
  height: 10vh;
  cursor: pointer;
  transition: 0.5s;
  font-size: 2.5vh;
  box-shadow:
    0 0 10px #1c0d1a,
    0 0 20px #1c0d1a,
    0 0 30px #1c0d1a;
}

.btn:hover {
  font-size: 3vh;
  background-color: rgba(86, 152, 195, 0.2);
}

.btn:before {
  content: '';
  position: absolute;
  width: 4vh;
  height: 4vh;
  top: -2.3vh;
  left: -0.3vh;
  background: rgba(210, 53, 125, 0.3);
  border-radius: 50%;
  box-shadow:
    0 0 10px #74787a,
    0 0 20px #74787a,
    0 0 30px #74787a;
}

.btn:after {
  content: '';
  position: absolute;
  width: 4vh;
  height: 4vh;
  bottom: -2.3vh;
  right: -1vh;
  background: rgba(54, 41, 47, 0.2);
  box-shadow:
    0 0 10px #f56c6c,
    0 0 20px #f56c6c,
    0 0 30px #f56c6c;
}
</style>
