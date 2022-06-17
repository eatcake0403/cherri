<template>
  <div :class="$style.root" v-if="chatUserInfo">
    <div :class="$style.userInfo">
      <v-avatar
        size="53"
      >
        <img
          :src="chatUserInfo.img"
        />
      </v-avatar>
      <div :class="$style.username">
        {{  chatUserInfo.name }}
      </div>
    </div>
    <div :class="$style.btnoutside">
      <v-btn
        color="#9aaec4"
        elevation="2"
        icon
        large
        outlined
        retain-focus-on-click
        :class="$style.btn"
        @click="$emit('queryEssential')"
      >
        <img
          src="@/assets/ic_search.png"
          :class="$style.icon"
        />
      </v-btn>
      <v-btn
        color="#9aaec4"
        elevation="2"
        icon
        large
        outlined
        retain-focus-on-click
        @click.stop="MemoCard = !MemoCard"
      >
        <img
          src="@/assets/ic_note.png"
          :class="$style.icon"
        />
      </v-btn>
      <MemoCard
        v-if="MemoCard"
        :class="$style.memocard"
      />
    </div>
  </div>
</template>

<script>
import MemoCard from '@/components/MemoCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    MemoCard
  },
  data () {
    return {
      MemoCard: false
    }
  },
  watch: {
    $route () {
      this.MemoCard = false
    }
  },
  computed: {
    ...mapState([
      'chatUserInfo'
    ])
  },
  created () {
    this.$bus.$on('memoCard:close', () => {
      this.MemoCard = false
    })
  },
  beforeDestroy () {
    this.$bus.$off('memoCard:close')
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root {
  display: flex;
  padding: 0 30px;
  box-sizing: border-box;
  background: $white;
  justify-content: space-between;
  box-shadow: 0px 1px 6px 0px rgb(208 207 207 / 63%);
}

.icon {
  width: 40px;
  height: 40px;
}

.btnoutside {
  display: flex;
  align-items: center;
  position: relative;
  .btn {
    margin-right: 10px;
  }

  .memocard {
    position: absolute;
    top: 90px;
    right: 0px;
  }
}

.userInfo {
  display: flex;
  align-items: center;
}

.username {
  font-size: 20px;
  margin-left: 20px;
  font-weight: 500;
}
</style>
