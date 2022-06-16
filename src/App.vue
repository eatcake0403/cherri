<template>
  <router-view
    v-if="loaded"
    id="app"
  />
</template>

<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  async created () {
    const types = ['getUserInfo', 'getMsgList']
    try {
      await Promise.all(
        types.map(type => {
          return this.$store.dispatch({
            type: type
          })
        })
      )
      this.loaded = true
    } catch {
      window.alert('讀取錯誤')
    }
  }
}
</script>

<style lang="scss">
@import 'reset-css';

// override vuetify style
html {
  overflow-x: auto !important;
  overflow-y: auto !important;
  overflow: auto !important;
}

#app {
  width: 100vw;
  height: 100vh;
  min-width: 1366px;
  min-height: 768px;
  overflow: auto;
}
</style>
