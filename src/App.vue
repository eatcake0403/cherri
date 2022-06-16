<template>
  <router-view id="app"/>
</template>

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
