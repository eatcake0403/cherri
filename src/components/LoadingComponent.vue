<template>
  <div :class="$style.spin"/>
</template>

<script>
export default {
  props: {
    top: {
      type: String,
      default: '85px'
    }
  }
}
</script>

<style lang="scss" module>
@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.spin {
  background: linear-gradient(90deg , #4A90E2, #96d3ff, #4A90E2);
  width: 0%;
  height: 7px;
  animation: loading .8s ease infinite;
  position: relative;
}
</style>
