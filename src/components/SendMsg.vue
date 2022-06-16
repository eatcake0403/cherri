<template>
  <div :class="$style.root">
    <input :class="$style.inputMsg"/>
    <img
      src="@/assets/ic_sent.png"
      :class="$style.send"
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
  border-top: 1px solid $line;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.inputMsg {
  flex: 1;
  color: $msg;

  &:focus {
    outline: none;
  }
}

.send {
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: 20px;
}
</style>
