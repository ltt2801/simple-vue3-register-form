import { createRouter, createWebHistory } from 'vue-router'

import IndexVue from './pages/index.vue'
import RegisterVue from './pages/Register.vue'

const routes = [
  {
    path: '/',
    component: IndexVue,
  },
  {
    path: '/register',
    component: RegisterVue,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router