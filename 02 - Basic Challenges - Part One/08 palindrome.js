function isPalindrome(str) {
    const formattedStr = removeNonAlphanumeric( str.toLowerCase() )
    const reversedStr = reverseString(formattedStr)
    return formattedStr === reversedStr
}
  

function removeNonAlphanumeric(str) {
    let formattedStr = ''

    for (let i = 0; i < str.length; i++) {
        if (isAlphaNumeric( str[i] )) {
            formattedStr += str[i]
        }
    }
    return formattedStr
}
  
function isAlphaNumeric(char) {
    const code = char.charCodeAt(0)
    return (
      (code >= 48 && code <= 57) ||  // Numbers 0-9
      (code >= 97 && code <= 122)    // Lowercase letters a-z
    )
}
  
function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}