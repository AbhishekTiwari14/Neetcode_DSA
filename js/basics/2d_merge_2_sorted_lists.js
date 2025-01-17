//Merge 2 sorted lists and make a single sorted list out of them and return its head. 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    let dummy = new ListNode(0, null);
    let tail = dummy
    while(list1 && list2){
        if(list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }
        else{
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }
    while(list1){
        tail.next = list1
        tail = tail.next
        list1 = list1.next
    }
    while(list2){
        tail.next = list2
        tail = tail.next
        list2 = list2.next
    }
    return dummy.next
};