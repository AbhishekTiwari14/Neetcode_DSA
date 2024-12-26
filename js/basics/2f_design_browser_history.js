// Design Browser history with methods to go to prev and next pages/urls.

/**
 * @param {string} homepage
 */

var Node = function(val, prev, next) {
    this.val = (val === undefined ? 0 : val);
    this.prev = (prev === undefined ? null : prev);
    this.next = (next === undefined ? null : next);
}

var BrowserHistory = function(homepage) {
    this.curr = new Node(homepage)
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let newNode = new Node(url)
    this.curr.next = newNode 
    newNode.prev = this.curr
    this.curr = this.curr.next 
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.curr.prev && steps>0){
        this.curr = this.curr.prev
        steps--
    }
    return this.curr.val
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(this.curr.next && steps>0){
        this.curr = this.curr.next
        steps--
    }
    return this.curr.val
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */