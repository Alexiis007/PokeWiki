import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "pokedex" */ '../views/Pokedex.vue')
    }
  },
  {
    path: '/T6Max',
    name: 'T6Max',
    component: function () {
      return import(/* webpackChunkName: "T6Max" */ '../views/Top6Max.vue')
    }
  },
  {
    path: '/T6Min',
    name: 'T6Min',
    component: function () {
      return import(/* webpackChunkName: "T6Min" */ '../views/Top6Min.vue')
    }
  },
  {
    path: '/About',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "About" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
