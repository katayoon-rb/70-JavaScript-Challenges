function symmetricDifference(arr1, arr2) {
  const result = []
  doingTheThing(arr1, new Set(arr2), result)
  doingTheThing(arr2, new Set(arr1), result)

  return result
}

function doingTheThing(arr, set, result) {
  for (const num of arr) {
    if (!set.has(num)) { result.push(num) }
  }
}
