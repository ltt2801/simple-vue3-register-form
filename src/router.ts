import { createRouter, createWebHistory } from 'vue-router'
import AppVue from './App.vue'
import RegisterVue from './pages/Register.vue'

const routes = [
  {
    path: '/',
    component: AppVue,
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