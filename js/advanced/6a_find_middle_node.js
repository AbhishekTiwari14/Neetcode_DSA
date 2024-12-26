//Find the middle node (if size = even, return 2nd middle node).

var middleNode = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
        if(fast) fast = fast.next
    }
    return slow
};