function findMissingLetter(arr) {
  const missingCharCode = arr.filter((char, index) => {
    if (index === 0) return false
    return (char.charCodeAt(0) - arr[index - 1].charCodeAt(0)) > 1
  })[0]

  return missingCharCode
    ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1)
    : ''
}