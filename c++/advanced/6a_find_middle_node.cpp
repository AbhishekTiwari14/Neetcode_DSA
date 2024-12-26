//Find the middle node (if size = even, return 2nd middle node).

ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while(fast->next){
            slow = slow->next;
            fast = fast->next;
            if(fast->next) fast = fast->next;
        }
        return slow;
    }