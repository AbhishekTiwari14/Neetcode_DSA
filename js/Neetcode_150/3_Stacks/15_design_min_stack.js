//Design Min Stack: design a stack which supports methods: push(), pop(), top() as done by a stack; but it should also support getMin() method which returns the min val in the stack. All methods must be of O(1) TC.


var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(this.minStack.length===0 || val < this.minStack[this.minStack.length-1]) this.minStack.push(val)
    else this.minStack.push(this.minStack[this.minStack.length-1])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */