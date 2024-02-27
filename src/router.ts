import { createRouter, createWebHistory } from 'vue-router'

import IndexVue from './pages/index.vue'
import RegisterVue from './pages/Register.vue'

const routes = [
  {
    path: '/',
    component: IndexVue,
    meta: {
      title: 'Index Page',
    }
  },
  {
    path: '/register',
    component: RegisterVue,
    meta: {
      title: 'Register Page',
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ''
  next()
})

export default router