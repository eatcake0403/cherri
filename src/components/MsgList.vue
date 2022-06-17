<template>
  <div :class="$style.root">
    <div
      :class="$style.msgnum"
      v-text="$t('FriendsList', { msgNum: msgList.length })"
    />
    <div
      v-for="item in msgList"
      :key="item.userID"
      :class="[$style.msgcard, { [$style.active]: item.userID === userID }]"
      @click="userIDFn(item.userID)"
    >
      <v-avatar
        :class="$style.userimg"
        size="53"
      >
        <img
          :src="item.img"
        >
      </v-avatar>
      <div :class="$style.username">
        {{ item.name }}
      </div>
      <div :class="$style.usermsg">
        {{ item.lastMsg }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'msgList',
      'userID'
    ])
  },
  methods: {
    userIDFn (userID) {
      if (this.userID === userID) return
      this.$router.push({ name: 'ChatViewUserID', params: { userID } })
    }
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root > * {
  border-bottom: 1px solid $line;
}

.msgnum {
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: rgb(77, 77, 77);
}

.msgcard {
  height: 85px;
  display: grid;
  grid-template-areas: 'userimg username'
                        'userimg usermsg';
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr 1fr;
  cursor: pointer;

  &.active {
    background: $active;
  }
}

.userimg {
  grid-area: userimg;
  border: 1px solid $line;
  margin: auto;
}

.username {
  grid-area: username;
  color: $black;
  font-size: 18px;
  font-weight: 500;
  align-self: end;
  padding-bottom: 5px;
}

.usermsg {
  grid-area: usermsg;
  color: $msg;
  padding-top: 5px;
}
</style>
