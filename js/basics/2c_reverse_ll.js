//Reverse the LL.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head
    let curr = head
    let prev = null, fwd = null 
    while(curr){
        fwd = curr.next
        curr.next = prev 
        prev = curr
        curr = fwd
    }
    return prev
};