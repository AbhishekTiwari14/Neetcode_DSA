//Q6b: Pair Sum: find the maximum pair sum in a LL of 'even' size. nodes at index i & n-1-i make a pair.

int pairSum(ListNode* head) {
        ListNode* slow = head; 
        ListNode* fast = head;
        ListNode* prev = NULL;
        while(fast &&  fast->next){
            fast = fast->next->next;
            ListNode* temp = slow->next;
            slow->next = prev;
            prev = slow;
            slow = temp;
        }
        int sum = 0;
        while(slow){
            sum = max(sum, prev->val + slow->val);
            slow = slow->next;
            prev = prev->next;
        }
        return sum;
    }