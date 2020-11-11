import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLogin from '@/views/TheLogin';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'login',
    component: TheLogin
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheChat')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
