<template>
  <div :class="$style.root">
    <div
      v-if="!userID"
      :class="$style.defaultoutside"
    >
      <img
        src="@/assets/img_default.png"
        :class="$style.defaultImg"
      />
      <p :class="$style.text">
        {{ $t('startUsing') }}Cherri Chat!
      </p>
    </div>
    <template v-else>
      <UserInfoToChat
        :class="$style.userinfotochat"
        @queryEssential="closeFn"
      />
      <QueryEssential
        v-if="queryEssential"
        :class="$style.queryessential"
        @queryEssential="closeFn"
      />
      <ChatList :class="$style.dialog"/>
      <SendMsg :class="$style.sendmsg"/>
    </template>
  </div>
</template>

<script>
import UserInfoToChat from '@/Middleware/UserInfoToChat.vue'
import QueryEssential from '@/components/QueryEssential.vue'
import SendMsg from '@/components/SendMsg.vue'
import ChatList from '@/components/ChatList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    UserInfoToChat,
    QueryEssential,
    SendMsg,
    ChatList
  },
  data () {
    return {
      queryEssential: false
    }
  },
  watch: {
    $route () {
      this.$store.commit({ type: 'commitEssential', essential: null })
      this.queryEssential = false
    }
  },
  computed: {
    ...mapState(['userID'])
  },
  methods: {
    closeFn () {
      if (this.queryEssential) {
        this.$store.commit({ type: 'commitEssential', essential: null })
      }
      this.queryEssential = !this.queryEssential
    }
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root {
  display: flex;
  flex-direction: column;
}

.defaultoutside {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .defaultImg {
    width: 300px;
    height: 250px;
  }

  .text {
    font-size: 30px;
    color: $primary;
    font-weight: 500;
    margin-top: 20px;
  }
}

.userinfotochat {
  height: 70px;
}

.queryessential {
  height: 70px;
}

.dialog {
  flex: 1;
}

.sendmsg {
  height: 70px;
}
</style>
