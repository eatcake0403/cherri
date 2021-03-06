import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo, getMsgList, getChatList } from '@/service/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    msgList: null,
    chatList: null,
    chatUserInfo: null,
    essential: null,
    userID: null,
    loading: false
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
    },
    commitEssential (state, { essential }) {
      state.essential = essential
    },
    commitUserID (state, { userID }) {
      state.userID = userID
    },
    commitMask (state, { loading }) {
      state.loading = loading
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
  },
  getters: {
    chatList: ({ chatList, essential }) => {
      if (!essential) return { nums: null, chatList }
      let nums = 0
      const data = chatList.map(item => {
        if (item.msg.includes(essential)) {
          nums = nums + 1
        }
        return {
          ...item,
          msg: item.msg.replaceAll(essential,
          `<span style="background: yellow; color: #000;">${essential}</span>`
          )
        }
      })
      return { nums, chatList: data }
    }
  }
})
