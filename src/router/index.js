import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainPer.vue'),
      props: true,
      children: [
        { path: '/', component: () => import('@/views/PageCard.vue') },
        { path: '/YuLan/:id', component: () => import('@/views/YuLan.vue') },
        { path: '/Class', component: () => import('@/views/ClassiFy.vue') },
        { path: '/time', component: () => import('@/views/TimePage.vue') },
        { path: '/talkme', component: () => import('@/views/TalkMe.vue') },
        { path: '/forme', component: () => import('@/views/ForMe.vue') }
      ]
    }
  ]
})

export default router
