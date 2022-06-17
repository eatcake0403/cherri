<template>
  <div :class="$style.root">
    <MsgList
      :class="$style.msgList"
    />
    <InfoTop :class="$style.infoTop"/>
    <router-view
      :class="$style.userInfoToChat"
    />
  </div>
</template>

<script>
import MsgList from '@/components/MsgList.vue'
import InfoTop from '@/components/InfoTop.vue'
export default {
  // router
  props: {
    userID: {
      type: String,
      default: null
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler () {
        this.$store.commit({ type: 'commitUserID', userID: this.userID })
        await this.$store.dispatch({ type: 'getChatList', userID: this.userID })
      }
    }
  },
  components: {
    MsgList,
    InfoTop
  }
}
</script>

<style lang="scss" module>
@import '@/SCSS/main.scss';

.root {
  display: grid;
  grid-template-areas: 'MsgList infoTop'
                        'MsgList userInfoToChat';
  grid-template-columns: 270px 1fr;
  grid-template-rows: 75px 1fr;
}

.msgList {
  grid-area: MsgList;
  background: $white;
  box-shadow: 2px 72px 6px 0px rgb(208 207 207 / 63%);
  z-index: 1;
}

.infoTop {
  grid-area: infoTop;
}

.userInfoToChat {
  box-sizing: border-box;
  grid-area: userInfoToChat;
  background: $white;
}
</style>
