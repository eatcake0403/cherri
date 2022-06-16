export async function getUserInfo () {
  const response = await fetch('/api/userInfo', { method: 'GET' })
  return await response.json()
}

export async function getMsgList () {
  const response = await fetch('/api/msgList', { method: 'GET' })
  return await response.json()
}
