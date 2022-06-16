<template>
  <div>
    <UserInfoToChat
      :class="$style.userinfotochat"
      @queryEssential="queryEssential = !queryEssential"
    />
    <QueryEssential
      v-if="queryEssential"
      :class="$style.queryessential"
      @queryEssential="queryEssential = !queryEssential"
    />
  </div>
</template>

<script>
import UserInfoToChat from '@/Middleware/UserInfoToChat.vue'
import QueryEssential from '@/components/QueryEssential.vue'
export default {
  components: {
    UserInfoToChat,
    QueryEssential
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

.userinfotochat {
  height: 70px;
}

.queryessential {
  height: 70px;
  border-bottom: 1px solid $line;
}
</style>
