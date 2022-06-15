import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from '@/Layout/IndexLayout.vue'
import ChatView from '@/views/ChatView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexLayout',
    component: IndexLayout,
    redirect: 'ChatView',
    children: [{
      path: 'ChatView',
      name: 'ChatView',
      component: ChatView,
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
