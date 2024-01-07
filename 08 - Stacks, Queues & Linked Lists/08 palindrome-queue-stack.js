import Queue from './06 queue'
import Stack from './02 stack'

function isPalindromeQueueStack(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const charQueue = new Queue()
  const charStack = new Stack()

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr.charAt(i)
    charQueue.enqueue(char)
    charStack.push(char)
  }

  while (!charQueue.isEmpty()) {
    if (charQueue.dequeue() !== charStack.pop()) {
      return false
    }
  }
  return true
}