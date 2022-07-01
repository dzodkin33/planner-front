import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Layout from '@/views/Layout.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/app', component: Layout},
  {path: '', component: Landing}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
