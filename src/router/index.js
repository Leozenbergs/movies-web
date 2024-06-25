import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default-layout.vue'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'default-layout',
    component: DefaultLayout,
    redirect: { name: 'home' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
