import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/scenario',
    name: 'Scenario',
    component: () => import(/* webpackChunkName: "scenario" */ '../views/Scenario.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chambre',
    name: 'Chambre',
    component: () => import(/* webpackChunkName: "chambre" */ '../views/Chambre.vue')
  },
  {
    path: '/lit',
    name: 'Lit',
    component: () => import(/* webpackChunkName: "lit" */ '../views/Lit.vue')
  },
  {
    path: '/finish',
    name: 'Finish',
    component: () => import(/* webpackChunkName: "finsish" */ '../views/Finish.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
