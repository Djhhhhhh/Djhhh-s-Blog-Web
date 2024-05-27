import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/StartBe.vue'),
      props: true
    },
    {
      path: '/mainper',
      component: () => import('@/views/MainPer.vue'),
      props: true
    },
    {
      path: '/YuLan/:id',
      component: () => import('@/views/YuLan.vue'),
      props: true
    },
    {
      path: '/Class',
      component: () => import('@/views/ClassiFy.vue'),
      props: true
    },
    {
      path: '/time',
      component: () => import('@/views/TimePage.vue')
    },
    {
      path: '/talkme',
      component: () => import('@/views/TalkMe.vue')
    },
    {
      path: '/forme',
      component: () => import('@/views/ForMe.vue')
    }
  ]
})

export default router
