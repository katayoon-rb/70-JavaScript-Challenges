class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  if (!root) { return 0 }
  return Math.max(
      maxDepth(root.left),
      maxDepth(root.right)
    ) + 1
}