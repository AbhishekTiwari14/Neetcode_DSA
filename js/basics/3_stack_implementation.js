class Stack {
    constructor() {
        this.items = []; // Initialize empty array
    }

    // Push an element
    push(element) {
        this.items.push(element);
    }

    // Pop an element
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        return this.items.pop();
    }

    // Peek (Top element)
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Size of stack
    size() {
        return this.items.length;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log("Top Element:", stack.peek());
stack.pop();
console.log("After Pop, Top Element:", stack.peek());
console.log("Is Empty:", stack.isEmpty());
