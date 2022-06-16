<template>
  <div :class="$style.root">
    <input
      :class="$style.inputMsg"
      @keyup.enter="submit"
      v-model="essential"
    />
    <div
      :class="$style.msg"
      v-text="`${items}` + $t('Items')"
      v-show="items"
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
  data () {
    return {
      essential: '',
      items: null
    }
  },
  methods: {
    submit () {
      this.$store.commit({ type: 'commitEssential', essential: this.essential })
    }
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root {
  border-bottom: 1px solid $line;
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
