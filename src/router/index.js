import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../components/Detail.vue'

const routes = [
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router