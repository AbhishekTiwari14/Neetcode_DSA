// Design Browser history with methods to go to prev and next pages/urls.

class Node{
    public: 
        string val;
        Node* prev;
        Node* next;
        
        Node(string val){
            this->val = val;
            this->prev = NULL;
            this->next = NULL;
        }
};

class BrowserHistory {
public:
    Node* curr;
    BrowserHistory(string homepage) {
        curr = new Node(homepage); 
    }
    
    void visit(string url) {
        Node* fwd = new Node(url); 
        curr->next = fwd;
        fwd->prev = curr;
        curr = curr->next; 
    }
    
    string back(int steps) {
        while(curr->prev && steps>0){
            curr = curr->prev;
            steps--;
        }
        return curr->val;
    }
    
    string forward(int steps) {
        while(curr->next && steps>0){
            curr = curr->next;
            steps--;
        }
        return curr->val;
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */