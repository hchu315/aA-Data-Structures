// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      // this.back = newNode;
    } else {
      let currNode = this.back;
      currNode.next = newNode;
      // this.back.next = currNode;
    }
    
    this.back = newNode;
    return ++this.length;
  }

  dequeue() {
    if (!this.front) return null;

    let currNode = this.front;

    if (this.back == this.front) {
      this.back = null;
      this.front = null;
    } else {
      this.front = this.front.next;
    }
    
    this.length--;
    return currNode.value;
  }
}

exports.Node = Node;
exports.Queue = Queue;