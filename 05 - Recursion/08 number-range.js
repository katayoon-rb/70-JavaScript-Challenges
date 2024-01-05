function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) { return [startNum] } 
  
  const numbers = rangeOfNumbers(startNum, endNum - 1)
  numbers.push(endNum)

  return numbers
}
