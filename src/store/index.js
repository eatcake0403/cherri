import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getMsgList } from '@/service/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    msgList: null
  },
  mutations: {
    commitUserInfo (state, { data }) {
      state.userInfo = data
    },
    commitMsgList (state, { data }) {
      state.msgList = data
    }
  },
  actions: {
    async getUserInfo (store) {
      const data = await getUserInfo()
      store.commit({ type: 'commitUserInfo', data })
    },
    async getMsgList (store) {
      const data = await getMsgList()
      store.commit({ type: 'commitMsgList', data })
    }
  }
})
