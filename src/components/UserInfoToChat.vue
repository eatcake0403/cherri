<template>
  <div :class="$style.root">
    <div :class="$style.userInfo">
      <v-avatar
        size="53"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        >
      </v-avatar>
      <div :class="$style.username">
        weweQ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
