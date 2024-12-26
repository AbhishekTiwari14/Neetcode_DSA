class Node {
public:
    int data;
    Node* next;
    Node* prev;

    Node(int value) {
        data = value;
        next = NULL;
        prev = NULL;
    }
};

void insertAtHead(Node*& head, int value) {
    Node* newNode = new Node(value);
    if (head != NULL) {
        head->prev = newNode;
    }
    newNode->next = head;
    head = newNode;
}