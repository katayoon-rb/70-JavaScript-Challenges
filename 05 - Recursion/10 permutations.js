function permutations(str) {
  const result = []

  if (str.length === 0) {
    result.push('')
    return result
  }

  for (let i = 0; i < str.length; i++) {
    const restOfString = str.slice(0, i) + str.slice(i + 1)
    const subPermutations = permutations(restOfString)

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(str[i] + subPermutations[j])
    }
  }
  return result
}