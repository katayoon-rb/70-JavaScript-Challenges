function validAnagrams(str1, str2) {
  const freqCount1 = createFregCount(str1)
  const freqCount2 = createFregCount(str2)

  return Object.keys(freqCount1).every(
    char => freqCount1[char] === freqCount2[char]
  )
}

function createFregCount(str) {
  return str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
}