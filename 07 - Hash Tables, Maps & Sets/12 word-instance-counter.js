const HashTable = require('./12 hash-table');

function wordInstanceCounter(str, word) {
  const words = str.toLowerCase().split(/\W+/)
  const wordFrequency = new HashTable()
  let count = 0

  for (const currentWord of words) {
    if (currentWord === '') continue

    if (wordFrequency.has(currentWord)) {
      wordFrequency.set(currentWord, wordFrequency.get(currentWord) + 1)
    }
    else {
      wordFrequency.set(currentWord, 1)
    }

    if (currentWord === word.toLowerCase()) {
      count = wordFrequency.get(currentWord)
    }
  }
  return count
}