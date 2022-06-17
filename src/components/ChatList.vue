<template>
  <div :class="$style.root">
    <div :class="$style.outside">
      <div
        v-for="item in chatList.chatList"
        :key="item.id"
        :class="[$style.defaultstyle, { [$style.ownstyle]: item.own }]"
      >
        <p v-html="item.msg"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['chatList'])
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';
.root {
  display: flex;
  align-items: flex-end;
  padding: 20px;
  overflow-y: auto;
}

.outside {
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
}

.defaultstyle {
  display: flex;
  align-items: center;
  border-radius: 21px;
  background: $primary;
  padding: 10px 15px;
  color: $white;
  box-sizing: border-box;
  justify-self: start;
  max-width: 40%;
  line-height: 23px;
}

.ownstyle {
  justify-self: flex-end;
}
</style>
