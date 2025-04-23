import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../components/Detail.vue'

const routes = [
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    props: (route) => ({ province: route.query.province })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router