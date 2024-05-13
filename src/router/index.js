import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Show from '@/views/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',component: Main},
    {path: '/pokemon',component: Main},
    {path: '/pokemon/:id',component: Show},
  ]
})

export default router
