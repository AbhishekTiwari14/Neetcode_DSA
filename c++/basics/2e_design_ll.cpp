class Node{
    public:
        int val;
        Node* next;
        Node* prev;

        //constructor
        Node(int val){
            this->val = val;
            this->prev = NULL;
            this->next = NULL;
        }
};

class MyLinkedList {
public:
    Node* left;
    Node* right;

    MyLinkedList() {
        left = new Node(0);
        right = new Node(0);
        left->next = right;
        right->prev = left;
    }
    
    int get(int index) {
        if(index<0) return -1;
        Node* temp = left->next;
        while(temp && index){
            temp = temp->next;
            index--;
        }    
        if(temp && temp!= right) return temp->val;
        return -1; 
    }
    
    void addAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = left->next;
        left->next->prev = newNode;
        left->next = newNode;
        newNode->prev = left;
    }
    
    void addAtTail(int val) {
        Node* newNode = new Node(val);
        right->prev->next = newNode;
        newNode->prev =right->prev;
        newNode->next = right;
        right->prev = newNode;
    }
    
    void addAtIndex(int index, int val) {
        if(index < 0) return;
        if(index == 0){ 
            addAtHead(val);
            return;
        }
        Node* temp = left;
        while(temp && index>0){
            temp = temp->next;
            index--;
        }
        if(!temp || temp==right || index>0) return;
        Node* fwd = temp->next;
        Node* newNode = new Node(val);
        temp->next = newNode;
        newNode->prev = temp;
        newNode->next = fwd;
        fwd->prev = newNode;
    }
    
    void deleteAtIndex(int index) {
        if(index<0) return;
        Node* temp = left->next;
        while(temp!= right && index>0){
            temp = temp->next;
            index--;
        } 
        Node* back = temp->prev;
        Node* fwd = temp->next;
        if(!fwd || !back) return;
        back->next = fwd;
        fwd->prev = back;
        delete temp;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */