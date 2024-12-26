// Detect cycle: return true if LL has a cycle, else return false.

var hasCycle = function(head) {
    if(!head || !head.next) return false
    let slow = head, fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false
};