//Q6b: Pair Sum: find the maximum pair sum in a LL of 'even' size. nodes at index i & n-1-i make a pair.

var pairSum = function(head) {
    let slow = head, fast = head, prev = null
    while(fast && fast.next){
        fast = fast.next.next
        const temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    let sum = 0
    while(slow){
        sum = Math.max(sum, prev.val + slow.val)
        slow = slow.next
        prev = prev.next
    }
    return sum
};