import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/mainper',
      children: [
        {
          path: '/article/mainper',
          component: () => import('@/views/mainPer/MainPer.vue')
        }
      ]
    },
    {
      path: '/page/YuLan/:id',
      component: () => import('@/views/page/YuLan.vue'),
      props: true
    }
  ]
})

export default router
