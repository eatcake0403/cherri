export async function getUserInfo () {
  const response = await fetch('/api/userInfo', { method: 'GET' })
  return await response.json()
}
