// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val)
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            let temp = this.tail;
            temp.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.tail) {
            return;
        }

        let temp = this.tail;
        if (this.head == this.tail) {
            this.head = this.tail = null;
        }

        // this.tail = null;
        this.length--;
        return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {   
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) {
            return;
        }

        let temp = this.head;
        if (this.head == this.tail) {
           this.head = this.tail = null; 
        } else {    
            this.head = this.head.next;
        }
        
        this.length--;
        return temp;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value == target) {
                return true;
            }
            currNode = currNode.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let currNode = this.head;
        let counter = 0;
        while (currNode) {
            if (counter == index) {
                return currNode;
            }
            counter++;
            currNode = currNode.next;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let currNode = this.head;
        let counter = 0;
        while (currNode) {
            if (counter == index) {
                currNode.value = val;
                return true;
            }
            counter++;
            currNode = currNode.next;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index == 0) return !!this.addToHead(val);
        if (index == this.length - 1) return !!this.addToTail(val);
        if (index >= this.length || index < 0) return false;

        let prevNode = this.get(index - 1)
        let newNode = new Node(val);
        prevNode.next = newNode;
        currNode = prevNode.next;
        currNode.next = temp;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        // let prevNode = null;
        // let currNode = this.head.next;
        // let counter = 0;

        // while (currNode) {
        //     if (counter == index) {
        //         if (currNode == currNode.next) {
        //             currNode = currNode.next = null;
        //         } else {

        //         }
        //     }
        //     counter++;
        //     prevNode = currNode
        //     currNode = currNode.next;
        // }
        // // return;
      
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
