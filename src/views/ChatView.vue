<template>
  <div :class="$style.root">
    <UserInfoToChat
      :class="$style.userinfotochat"
      @queryEssential="queryEssential = !queryEssential"
    />
    <QueryEssential
      v-if="queryEssential"
      :class="$style.queryessential"
      @queryEssential="queryEssential = !queryEssential"
    />
    <div :class="$style.dialog"/>
    <SendMsg :class="$style.sendmsg"/>
  </div>
</template>

<script>
import UserInfoToChat from '@/Middleware/UserInfoToChat.vue'
import QueryEssential from '@/components/QueryEssential.vue'
import SendMsg from '@/components/SendMsg.vue'
export default {
  components: {
    UserInfoToChat,
    QueryEssential,
    SendMsg
  },
  data () {
    return {
      queryEssential: false
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
