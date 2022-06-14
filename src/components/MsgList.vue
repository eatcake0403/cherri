<template>
  <div :class="$style.root">
    <div
      :class="$style.msgnum"
      v-text="$t('FriendsList', { msgNum: 2 })"
    />
    <div
      :class="$style.msgcard"
    >
      <v-avatar
        :class="$style.userimg"
        size="53"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        >
      </v-avatar>
      <div :class="$style.username">
        weweQ
      </div>
      <div :class="$style.usermsg">
        你好哇
      </div>
    </div>
  </div>
</template>

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
