import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PageLayout from "@/layouts/page-layout.vue"
import HomePage from "@/views/homepage/homepage.vue"
import SecurityPage from "@/views/security/security.vue"
import LoginPage from "@/views/login/login.vue"
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: PageLayout,
    children: [
      {
        path: "/",
        name: "index",
        component: HomePage,
        meta: {
          layout: "profile-layout"
        }
      },
      {
        path: "/security",
        name: "security",
        component: SecurityPage,
        meta: {
          layout: "profile-layout"
        }
      },
      {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
          layout: "auth-layout"
        }
      }
    ]
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
