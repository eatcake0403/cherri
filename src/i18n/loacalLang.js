export function searchLocalLang () {
  const localStorageHasLang = window.localStorage.getItem('lang')
  if (localStorageHasLang) return localStorageHasLang
  const lang = window.navigator.language.toLowerCase()
  switch (lang) {
    case 'zh':
    case 'zh-TW':
    case 'zh-tw':
      window.localStorage.setItem('lang', 'tw')
      return 'tw'
    default:
      window.localStorage.setItem('lang', 'en')
      return 'en'
  }
}
