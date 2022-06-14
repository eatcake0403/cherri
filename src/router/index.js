import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from '@/Layout/IndexLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexLayout',
    component: IndexLayout,
    children: [{
      path: 'message/:userID',
      name: 'IndexLayout',
      component: IndexLayout,
      props: (route) => ({
        userID: route.params.route
      })
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
