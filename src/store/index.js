import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getMsgList, getChatList } from '@/service/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    msgList: null,
    chatList: null,
    chatUserInfo: null
  },
  mutations: {
    commitUserInfo (state, { data }) {
      state.userInfo = data
    },
    commitMsgList (state, { data }) {
      state.msgList = data
    },
    commitChatList (state, { data, chatUserInfo }) {
      state.chatList = data
      state.chatUserInfo = chatUserInfo
    }
  },
  actions: {
    async getUserInfo (store) {
      const data = await getUserInfo()
      store.commit({ type: 'commitUserInfo', data })
    },
    async getMsgList (store, { userID }) {
      const data = await getMsgList()
      store.commit({ type: 'commitMsgList', data })
    },
    async getChatList (store, { userID }) {
      const data = await getChatList(userID)
      const chatUserInfo = store.state.msgList.find(item => item.userID === userID)
      store.commit({ type: 'commitChatList', data, chatUserInfo })
    }
  }
})
