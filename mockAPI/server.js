// src/server.js
import { createServer } from 'miragejs'

export function makeServer () {
  return createServer({
    routes () {
      this.get('/api/userInfo', () => ({
        UUID: '231Skjasdjsdsad',
        name: '潔西卡',
        img: 'https://images.twgreatdaily.com/images/image/jft/jft4X20BJleJMoPMaMxO.jpg'
      }))

      this.get('/api/msgList', () => (
        [{
          userID: '6666garbled',
          name: '保羅',
          lastMsg: '大家好，我叫保羅～',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxN_j91aLZStSGDhSgDT1F8HvjItLnJzj8KvcwJAI&s'
        }, {
          userID: '7777garbled',
          name: '傑克',
          lastMsg: '大家好，我叫傑克～',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFkrgZjoGbu3sN5n_A42xsN-spo-4k8igeujLwQ&s'
        }, {
          userID: '8888garbled',
          name: '傑森',
          lastMsg: '大家好，我叫傑森～',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbSyj6lBOhrieXa2PEVvWlW2bGwiXbbUQj9zuFX8jtw&s'
        }]
      ))

      this.get('/api/chatList/:userID', (schema, request) => {
        const id = request.params.userID
        switch (id) {
          case '6666garbled':
            return [{
              msg: '保羅', id: 1, own: true
            }, {
              msg: '你好, 我是潔西卡 ', id: 2, own: true
            }, {
              msg: '我喜歡吃的食物有', id: 3, own: true
            }, {
              msg: '各種巧克力口味的甜點', id: 4, own: true
            }, {
              msg: '妳好, 潔西卡', id: 5, own: false
            }]
          case '7777garbled':
            return [{
              msg: '傑克', id: 1, own: true
            }, {
              msg: '你好, 我是潔西卡', id: 2, own: true
            }, {
              msg: '我喜歡做的運動為', id: 3, own: true
            }, {
              msg: '游泳, 跑步', id: 4, own: true
            }, {
              msg: '妳好, 潔西卡', id: 5, own: false
            }]
          case '8888garbled':
            return [{
              msg: '傑森', id: 1, own: true
            }, {
              msg: '你好,  我是潔西卡', id: 2, own: true
            }, {
              msg: '我喜歡的動物為', id: 3, own: true
            }, {
              msg: '貓, 狗', id: 4, own: true
            }, {
              msg: '妳好, 潔西卡', id: 5, own: false
            }]
        }
      })
    }
  })
}
