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
        v-model="recordMsg"
      />
      <v-btn
        block
        color="#4A90E2"
        dark
        @click="addRecordMsg"
      >
        {{ $t('Add') }}
      </v-btn>
      <div :class="$style.recordoutside">
        <div
          :class="$style.record"
          v-for="(item, i) in recordMsgList"
          :key="i"
        >
          <div :class="$style.time">
            <p>
              {{ item.time }}
            </p>
            <img
              src="@/assets/ic_close2.png"
              :class="$style.close"
              @click="deleteRecordMsg(item.time)"
            >
          </div>
          {{ item.recordMsg }}
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      recordMsg: '',
      recordMsgList: []
    }
  },
  computed: {
    ...mapState([
      'chatUserInfo'
    ])
  },
  methods: {
    addRecordMsg () {
      const time = new Date()
      this.recordMsgList.push({ time, recordMsg: this.recordMsg })
      this.recordMsg = ''
      window.localStorage.setItem(
        this.chatUserInfo.userID,
        JSON.stringify(this.recordMsgList)
      )
    },
    deleteRecordMsg (time) {
      this.recordMsgList = this.recordMsgList.filter(item => item.time !== time)
      window.localStorage.setItem(
        this.chatUserInfo.userID,
        JSON.stringify(this.recordMsgList)
      )
    }
  },
  created () {
    const msgList = JSON.parse(window.localStorage.getItem(this.chatUserInfo.userID))
    if (!msgList) return
    this.recordMsgList = msgList
  }
}
</script>

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

.recordoutside {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid $line;
  display: grid;
  grid-row-gap: 15px;
  max-height: 400px;
  overflow-y: auto;

  .record {
    position: relative;
    border: 1px solid $line;
    min-height: 100px;
    padding: 10px;
    box-sizing: border-box;

    .time {
      color: $primary;
      font-size: 16px;
    }

    .close {
      position: absolute;
      right: 7px;
      top: 7px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
}
</style>
