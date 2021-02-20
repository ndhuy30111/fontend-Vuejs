import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Taosanpham from '../views/Taosanpham.vue'
import Sanpham from '../views/Sanpham.vue'
import Xemsanpham from '../views/Xemsanpham.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/taosanpham',
    name: 'Taosanpham',
    component: Taosanpham
  },
  {
    path: '/danhsachsanpham',
    name: "danhsachsanpham",
    component: Sanpham
  },
  {
    path: '/xemsanpham/:url',
    name: 'xemsanpham',
    component: Xemsanpham
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
