<script setup>
// import img1 from '../picture/01.jpg'
// import img2 from '../picture/02.jpg'
import img3 from '../picture/03.jpg'
// import img4 from '../picture/04.png'
// import img5 from '../picture/05.png'
// import img6 from '../picture/06.png'
// import img7 from '../picture/07.png'
// import img8 from '../picture/08.png'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const persons = [
  {
    src: img3,
    name: 'CFEDURound146(Div.2)',
    mmain: '教育',
    time: '2024.1.8'
  },
  {
    src: img3,
    name: 'CF板刷日记(六)',
    mmain: '快乐板刷',
    time: '2024.1.8'
  },
  {
    src: img3,
    name: 'CF板刷日记(五)',
    mmain: '快乐板刷?',
    time: '2024.1.5'
  },
  {
    src: img3,
    name: 'CFRound811(Div.3)',
    mmain: '练场div3,这场打的不行',
    time: '2024.1.4'
  },
  {
    src: img3,
    name: 'CF板刷日记(三)',
    mmain: '训练日记，放假喽',
    time: '2024.1.3'
  },
  {
    src: img3,
    name: 'Git学习',
    mmain: 'git操作大赏',
    time: '2023.1.2'
  },
  {
    src: img3,
    name: 'CF板刷日记(二)',
    mmain: '训练日记',
    time: '2024.1.2'
  },
  {
    src: img3,
    name: 'CF板刷日记(一)',
    mmain: '训练日记，元旦快乐',
    time: '2024.1.1'
  },
  {
    src: img3,
    name: 'CFRound916(Div.3)',
    mmain: '补题',
    time: '2023.12.31'
  },
  {
    src: img3,
    name: 'CFGoodBye2023',
    mmain: 'goodBye2023',
    time: '2023.12.30'
  },
  {
    src: img3,
    name: 'CFRound918(Div.4)',
    mmain: 'cfdiv4题解,这场有点破防',
    time: '2023.12.29'
  },
  {
    src: img3,
    name: 'JAVA数据库课程设计',
    mmain: '课设的实现与总结',
    time: '2023.12.21'
  },
  {
    src: img3,
    name: '算法模板',
    mmain: '整理了作者所学过的所有算法与数据结构,并且可以尝试应付下期末考试',
    time: '2023.12.12'
  },
  { src: img3, name: 'Java', mmain: '学习java,后端的路才刚刚开始', time: '2023.12.12' },
  {
    src: img3,
    name: '蓝桥杯报名流程',
    mmain: '蓝桥杯报名详细流程以及注意事项',
    time: '2023.11.20'
  },
  { src: img3, name: '算法学习路线', mmain: '算法协会新生学习建议', time: '2023.11.20' },
  { src: img3, name: 'DP', mmain: '动态规划真是太难了', time: '2023.11.20' },
  { src: img3, name: 'AJAX', mmain: '异步交互技术', time: '2023.11.20' },
  { src: img3, name: 'VueRouter', mmain: 'Vue中路由细节', time: '2023.11.20' },
  { src: img3, name: 'TypeScript', mmain: 'JS增强版,但是现在感觉没啥用了', time: '2023.11.20' },
  { src: img3, name: 'NodeJs', mmain: 'nodejs nb', time: '2023.11.20' },
  { src: img3, name: '常用dos命令', mmain: 'dos命令!', time: '2023.11.20' },
  { src: img3, name: 'CFEDURound154(RatedforDiv. 2)', mmain: '题解!', time: '2023.10.20' },
  { src: img3, name: 'CFGoodBye2023', mmain: '题解!', time: '2023.10.10' },
  { src: img3, name: 'CFPinelyRound2(Div.1+Div.2)', mmain: '题解!', time: '2023.10.9' },
  { src: img3, name: 'CFRound849 (Div.4)', mmain: '题解!', time: '2023.10.8' },
  { src: img3, name: 'CFRound802(Div.2)', mmain: '题解!', time: '2023.10.7' },
  { src: img3, name: 'CFRound894(Div.3)', mmain: '题解!', time: '2023.10.6' }
]

let currentPage = ref(1)
const itemsPerPage = 6
let add = () => {
  currentPage.value++
  if (currentPage.value * itemsPerPage >= persons.length + itemsPerPage) currentPage.value--
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  })
}
let dda = () => {
  currentPage.value--
  if (currentPage.value < 1) currentPage.value++
  window.scrollTo({
    top: 800,
    behavior: 'smooth'
  })
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
      <p class="f">&emsp;&emsp;{{ person.mmain }}</p>
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
        <li>你好 2024</li>
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
.my {
  position: absolute;
  top: 120vh;
  right: 0;
  bottom: 0;
  left: 2.5vw;
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
  font-size: clamp(0.1rem, 2vw, 2.5rem);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  color: rgba(167, 168, 189, 0.5);
  text-shadow: 2px 2px #777;
}

.news {
  margin-top: 2vh;
  font-size: clamp(0.1rem, 2vw, 1rem);
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
  font-size: clamp(0.1rem, 2vw, 1.5rem);
  width: 100%;
  height: 4vh;
  overflow: hidden;
  color: rgba(167, 168, 189, 0.5);
  text-shadow: 2px 2px #777;
}
.box {
  position: absolute;
  top: 100vh;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  z-index: -1;
  background-image: url(../picture/svg.png);
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
  font-size: clamp(0.1rem, 4vw, 1rem);
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
  font-size: clamp(0.1rem, 4vw, 2.5rem);
  transition: 1s;
  color: rgb(0, 0, 0);
}

.peryl:hover .e {
  font-size: clamp(0.1rem, 4vw, 1.5rem);
  opacity: 1;
}
.f {
  width: 20vw;
  height: 10vh;
  opacity: 0;
  transition: 1s;
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
  z-index: 2;
}
.peryl:hover .f {
  opacity: 1;
}

.pagination-buttons {
  position: absolute;
  top: 220vh;
  bottom: 5vh;
  left: 2.5vw;
  width: 25vw;
}
.btn {
  position: relative;
  border-radius: 4vh;
  background-color: rgba(255, 255, 255, 0.1);
  width: 7.5vw;
  height: 7vh;
  margin-right: 1vw;
  cursor: pointer;
  transition: 0.5s;
  font-size: clamp(0.1rem, 1vw, 1.25rem);
  box-shadow:
    0 0 10px #1c0d1a,
    0 0 20px #1c0d1a,
    0 0 30px #1c0d1a;
}

.btn:hover {
  font-size: clamp(0.1rem, 4vw, 1.5rem);
  background-color: rgba(86, 152, 195, 0.2);
}

.btn:before {
  content: '';
  position: absolute;
  width: 2vw;
  height: 4vh;
  top: -2.3vh;
  left: -0.15vw;
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
  width: 2vw;
  height: 4vh;
  bottom: -2.3vh;
  right: -0.5vw;
  background: rgba(54, 41, 47, 0.2);
  box-shadow:
    0 0 10px #f56c6c,
    0 0 20px #f56c6c,
    0 0 30px #f56c6c;
}
</style>
