<template>
  <div :class="$style.root">
    <div :class="$style.outside">
      <div
        v-for="item in msgList"
        :key="item.id"
        :class="[$style.defaultstyle, { [$style.ownstyle]: item.own }]"
      >
        {{ item.msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgList: [{
        own: true, id: 1, msg: '123'
      }, {
        own: true, id: 2, msg: '222'
      }, {
        own: true, id: 3, msg: '12333'
      }, {
        own: true, id: 4, msg: '121231233'
      }, {
        own: false, id: 5, msg: '121232131233'
      }, {
        own: true, id: 6, msg: '121231232132133'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import 'src/SCSS/main.scss';
.root {
  display: flex;
  align-items: flex-end;
  padding: 20px;
  overflow-y: auto;
}

.outside {
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
}

.defaultstyle {
  display: flex;
  align-items: center;
  border-radius: 999rem;
  background: $primary;
  padding: 10px 15px;
  color: $white;
  box-sizing: border-box;
  justify-self: start;
}

.ownstyle {
  justify-self: flex-end;
}
</style>
