const Base64 = {
  encode(str: string) {
     return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          const num = Number('0x' + p1)
          return String.fromCharCode(num)
      }))
  },
  decode(str: string) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}

export function getEncodedContent(tinymceHtml: string): string {
  return Base64.encode(tinymceHtml)
}

export function getDecodedContent(encoded: string): string {
  return Base64.decode(encoded)
}