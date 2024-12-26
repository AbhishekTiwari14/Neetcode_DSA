//Merge 2 sorted lists and make a single sorted list out of them and return its head.

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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if(!list1) return list2;
        if(!list2) return list1;
        ListNode* dummy = new ListNode();
        ListNode* tail = dummy;
        while(list1 && list2){
            if(list1->val >= list2->val){
                ListNode* newNode = new ListNode(list2->val);
                list2 = list2->next;
                tail->next = newNode;
            }
            else{
                ListNode* newNode = new ListNode(list1->val);
                list1 = list1->next;
                tail->next = newNode;
            }
            tail = tail->next;
        }
        while(list1){
            ListNode* newNode = new ListNode(list1->val);
            list1 = list1->next;
            tail->next = newNode;
            tail = tail->next;
        }
        while(list2){
            ListNode* newNode = new ListNode(list2->val);
            list2 = list2->next;
            tail->next = newNode;
            tail = tail->next;
        }
        return dummy->next;
    }

};