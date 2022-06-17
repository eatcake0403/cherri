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
    props: (route) => ({
      userID: route.params.userID
    }),
    children: [{
      path: 'ChatView',
      name: 'ChatView',
      component: ChatView
    }, {
      path: 'ChatView/:userID',
      name: 'ChatViewUserID',
      component: ChatView
    }]
  }
]

// for gitHub
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
