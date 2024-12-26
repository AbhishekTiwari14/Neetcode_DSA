//Reverse the LL.

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {  
        if(!head || !head->next) return head;   
        ListNode* fwd = NULL;
        ListNode* bwd = NULL;
        ListNode* temp = head;
        while(temp){
            fwd = temp->next;
            temp->next = bwd;
            bwd = temp;
            temp = fwd;
        }
        return bwd;
    }
}; 