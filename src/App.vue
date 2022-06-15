<template>
  <router-view id="app"/>
</template>

<style lang="scss">
@import 'reset-css';

// override vuetify style
html {
  overflow-x: auto !important;
}

#app {
  width: 100vw;
  height: 100vh;
  min-width: 1364px;
  min-height: 763px;
  overflow: auto;
}
</style>
