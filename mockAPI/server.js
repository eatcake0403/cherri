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
          userID: '12321321SDDD222222',
          name: '保羅',
          lastMsg: '大家好，我叫保羅～',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxN_j91aLZStSGDhSgDT1F8HvjItLnJzj8KvcwJAI&s'
        }, {
          userID: '123123AAAAA1SSS',
          name: '傑克',
          lastMsg: '大家好，我叫傑克～',
          img: 'https://i03piccdn.sogoucdn.com/14c769fa34b9ab68'
        }, {
          userID: 'SJHSSHJHSHSA1323122',
          name: '傑森',
          lastMsg: '大家好，我叫傑森～',
          img: 'https://i02piccdn.sogoucdn.com/ef05d4212fdaf841'
        }]
      ))
    }
  })
}
