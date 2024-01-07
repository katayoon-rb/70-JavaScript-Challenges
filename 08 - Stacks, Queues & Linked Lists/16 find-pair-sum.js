import DoublyLinkedList from './15 doubly-linked-list'

function findPairSum(nums, targetSum) {
  const seen = new DoublyLinkedList()

  for (const num of nums) {
    const difference = targetSum - num
    if (seen.contains(difference)) {
      return [difference, num]
    }
    seen.append(num)
  }
  return null
}