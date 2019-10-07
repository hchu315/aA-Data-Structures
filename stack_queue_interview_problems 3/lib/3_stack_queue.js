// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val.value);

        if (!this.top) {
            this.bottom = newNode;
            this.top = newNode;
        } else {   
            let currNode = this.top;
            this.top = newNode;
            this.top.next = currNode;
        }
        
        return ++this.length;
    }

    pop() {
        if (!this.bottom) return null;

        let currNode = this.top;

        if (this.bottom == this.top) {
            this.bottom = null;
            this.top = null;
        } else {
            this.top = this.top.next;
        }

        this.length--;
        return currNode;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
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

        if (!this.back) {
            this.front = newNode;
            this.back = newNode;
        } else {
            let currNode = this.back;
            this.back = newNode;
            // this.back.next = currNode;
            currNode.next = this.back;
        }

        return ++this.length;
    }

    dequeue() {
        if (!this.front) return null;
        let currNode = this.front;
        
        if (this.front == this.back) {
            this.front = null;
            this.back = null;
        } else {
            this.front = this.front.next;
        }

        this.length--;
        return currNode;
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
