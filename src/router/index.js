import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeViews from '../views/Home/View.vue'
import AboutView from '../views/About/View.vue'
import ContactView from '../views/Contact/View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/homes',
      name: 'homes',
      component: HomeViews
    },
    {
      path: '/abouts',
      name: 'abouts',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
