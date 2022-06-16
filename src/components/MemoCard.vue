<template>
  <div :class="$style.root">
    <v-card
      elevation="4"
      width="330"
      :class="$style.card"
      min-height="50"
    >
      <textarea
        :class="$style.textarea"
        :placeholder="$t('Message')"
      />
      <v-btn
        block
        color="#4A90E2"
        dark
      >
        {{ $t('Add') }}
      </v-btn>
    </v-card>
  </div>
</template>

<style lang="scss" module>
@import 'src/SCSS/main.scss';

.root {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: -15px;
    right: 7px;
    width: 30px;
    height: 30px;
    background: $white;
    box-shadow: 0px 1px 6px 0px rgb(208 207 207 / 63%);
    -moz-transform:rotate(45deg);
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
    -ms-transform:rotate(45deg);
    transform:rotate(45deg);
  }
}

.textarea {
  width: 100%;
  resize: none;
  height: 120px;
  border: 1px solid $primary;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
}

.card {
  z-index: 1;
  padding: 30px;
  box-sizing: border-box;
}
</style>
