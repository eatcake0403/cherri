<template>
  <div>
    <router-view
      v-if="loaded"
      id="app"
    />
    <LoadingComponent
      class="LoadingComponent"
      v-show="loading"
    />
  </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue'
import { mapState } from 'vuex'
export default {
  components: {
    LoadingComponent
  },
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  async created () {
    const types = ['getUserInfo', 'getMsgList']
    this.$store.commit({ type: 'commitMask', loading: true })
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
    } finally {
      this.$store.commit({ type: 'commitMask', loading: false })
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

.LoadingComponent {
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
