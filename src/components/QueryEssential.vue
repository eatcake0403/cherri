<template>
  <div :class="$style.root">
    <input :class="$style.inputMsg"/>
    <div
      :class="$style.msg"
      v-text="`${2}` + $t('Items')"
    />
    <img
      src="@/assets/ic_close.png"
      :class="$style.close"
      @click="$emit('queryEssential')"
    />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root {
  border-bottom: 1 px solit $line;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.inputMsg {
  flex: 1;

  &:focus {
    outline: none;
  }
}

.msg {
  min-width: 70px;
  font-size: 16px;
  color: $msg;
}

.close {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: 20px;
}
</style>
