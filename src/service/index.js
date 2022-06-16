export async function getUserInfo () {
  const response = await fetch('/api/userInfo', { method: 'GET' })
  return await response.json()
}

export async function getMsgList () {
  const response = await fetch('/api/msgList', { method: 'GET' })
  return await response.json()
}

export async function getChatList (userID) {
  const reqUrl = `/api/msgList/${userID}`
  const response = await fetch(reqUrl, { method: 'GET' })
  return await response.json()
}
