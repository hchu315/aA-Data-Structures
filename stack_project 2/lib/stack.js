// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.top) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      let currNode = this.top;
      this.top = newNode;
      this.top.next = currNode;
      // currNode.next = this.top;
    }

    return ++this.length;
  }

  pop() {
    if (!this.top) return null;

    let currNode = this.top;

    if (this.top == this.bottom) {
      this.top = this.bottom = null;
    } else {
      this.top = currNode.next;      
    }

    this.length--;
    return currNode.value;
  }

  size() {
    return this.length;
  }

}

exports.Node = Node;
exports.Stack = Stack;
