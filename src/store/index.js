import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getMsgList, getChatList } from '@/service/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    msgList: null,
    chatList: null
  },
  mutations: {
    commitUserInfo (state, { data }) {
      state.userInfo = data
    },
    commitMsgList (state, { data }) {
      state.msgList = data
    },
    commitChatList (state, { data }) {
      state.chatList = data
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
    },
    async getChatList (store, { userID }) {
      console.log(userID)
      const data = await getChatList(userID)
      store.commit({ type: 'commitChatList', data })
    }
  }
})
