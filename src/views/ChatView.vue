<template>
  <div>
    <UserInfoToChat :class="$style.UserInfoToChat"/>
  </div>
</template>

<script>
import UserInfoToChat from '@/Middleware/UserInfoToChat.vue'
export default {
  components: {
    UserInfoToChat
  }
}
</script>

<style lang="scss" module>
.UserInfoToChat {
  height: 70px;
}
</style>
