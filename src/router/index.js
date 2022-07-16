import { createRouter, createWebHistory } from 'vue-router'
import Collection from '../views/Collection.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/men',
    name: 'Men',
    component: Men
  },
  {
    path: '/women',
    name: 'Women',
    component: Women
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
