<template>
  <div :class="$style.root">
    <MsgList :class="$style.msgList"/>
    <InfoTop :class="$style.infoTop"/>
    <router-view :class="$style.userInfoToChat"/>
  </div>
</template>

<script>
import MsgList from '@/components/MsgList.vue'
import InfoTop from '@/components/InfoTop.vue'
export default {
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
  overflow: auto;
}

.msgList {
  width: 100%;
  min-height: 100%;
  grid-area: MsgList;
  background: $white;
  box-shadow: 2px 72px 6px 0px rgb(208 207 207 / 63%);
  z-index: 1;
  overflow: auto;
}

.infoTop {
  width: 100%;
  height: 100%;
  grid-area: infoTop;
  overflow: auto;
}

.userInfoToChat {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  grid-area: userInfoToChat;
  background: $white;
  overflow: auto;
}
</style>
