import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import MoviesLayout from '../layouts/MoviesLayout.vue'
import Home from '../views/HomeView.vue'
import Movies from '../views/MoviesView.vue'
import Details from '../views/MovieDetailsView.vue'

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
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesLayout,
    children: [
      {
        path: '',
        name: 'search',
        component: Movies,
      },
      {
        path: ':id',
        name: 'details',
        component: Details,
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
