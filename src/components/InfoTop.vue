<template>
  <div :class="$style.root">
    <div :class="$style.left">
      <p :class="$style.logoname">
        Cherri Chat
      </p>
      <div>
        <v-btn
          color="#fff"
          rounded
          small
          :class="$style.font"
          depressed
          @click="changeLang('tw')"
        >
          中文
        </v-btn>
        <v-btn
          color="#fff"
          rounded
          small
          outlined
          @click="changeLang('en')"
        >
          English
        </v-btn>
      </div>
    </div>
    <div :class="$style.right">
      <v-avatar
        :class="$style.userimg"
        size="53"
      >
        <img
          :src="userData.img"
        >
      </v-avatar>
      <p :class="$style.name">
        {{ userData.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '@/service/index.js'
export default {
  data () {
    return {
      userData: null
    }
  },
  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang
      window.localStorage.setItem('lang', lang)
    }
  },
  async created () {
    this.userData = await getUserInfo()
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';
.root {
  box-sizing: border-box;
  background: $primary;
  color: $white;
  display: flex;
  justify-content: space-between;
  overflow: auto;
}

.left {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

.right {
  padding: 0 20px;
  box-sizing: border-box;
  border-left: 1px solid $white;
  width: 180px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
}

.font {
  &:global(.theme--light.v-btn) {
    color: $primary;
    margin-right: 10px;
  }
}

.logoname {
  font-size: 28px;
  font-weight: 500;
}

.name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.userimg {
  margin-right: 10px;
}
</style>
