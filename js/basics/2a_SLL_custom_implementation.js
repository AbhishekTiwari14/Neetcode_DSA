class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  

  Linked List in C++ and JavaScript (Exhaustive Guide)
  1. What is a Linked List?
  A linked list is a linear data structure where elements (called nodes) are connected using pointers.
  
  Types of Linked Lists
  Singly Linked List - Each node points to the next node.
  Doubly Linked List - Each node points to the next and previous nodes.
  Circular Linked List - Last node points back to the first node.
  2. Linked List in C++
  2.1 Singly Linked List in C++
  Node Structure
  cpp
  Copy code
  #include <iostream>
  using namespace std;
  
  // Node structure
  class Node {
  public:
      int data;
      Node* next;
  
      Node(int value) {
          data = value;
          next = NULL;
      }
  };
  Operations
  1. Insert at Head
  cpp
  Copy code
  void insertAtHead(Node*& head, int value) {
      Node* newNode = new Node(value);
      newNode->next = head;
      head = newNode;
  }
  2. Insert at Tail
  cpp
  Copy code
  void insertAtTail(Node*& head, int value) {
      Node* newNode = new Node(value);
      if (head == NULL) {
          head = newNode;
          return;
      }
      Node* temp = head;
      while (temp->next != NULL) {
          temp = temp->next;
      }
      temp->next = newNode;
  }
  3. Delete Node
  cpp
  Copy code
  void deleteNode(Node*& head, int key) {
      if (head == NULL) return; // Empty list
  
      // If head node itself holds the key
      if (head->data == key) {
          Node* temp = head;
          head = head->next;
          delete temp;
          return;
      }
  
      Node* temp = head;
      Node* prev = NULL;
  
      while (temp != NULL && temp->data != key) {
          prev = temp;
          temp = temp->next;
      }
  
      if (temp == NULL) return; // Key not found
  
      prev->next = temp->next;
      delete temp;
  }
  4. Search Node
  cpp
  Copy code
  bool search(Node* head, int key) {
      Node* temp = head;
      while (temp != NULL) {
          if (temp->data == key) return true;
          temp = temp->next;
      }
      return false;
  }
  5. Display Linked List
  cpp
  Copy code
  void display(Node* head) {
      Node* temp = head;
      while (temp != NULL) {
          cout << temp->data << " -> ";
          temp = temp->next;
      }
      cout << "NULL" << endl;
  }
  2.2 Doubly Linked List in C++
  Node Structure
  cpp
  Copy code
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
  Insert at Head
  cpp
  Copy code
  void insertAtHead(Node*& head, int value) {
      Node* newNode = new Node(value);
      if (head != NULL) {
          head->prev = newNode;
      }
      newNode->next = head;
      head = newNode;
  }
  3. Linked List in JavaScript
  3.1 Singly Linked List in JavaScript
  Node Structure
  javascript
  Copy code
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  Operations
  1. Insert at Head
  javascript
  Copy code
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtHead(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  deleteNode(key) {
    if (!this.head) return;
  
    // If head contains the key
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }
  
    let temp = this.head;
    let prev = null;
  
    while (temp && temp.data !== key) {
      prev = temp;
      temp = temp.next;
    }
  
    if (temp) {
      prev.next = temp.next;
    }
  }

  search(key) {
    let temp = this.head;
    while (temp) {
      if (temp.data === key) return true;
      temp = temp.next;
    }
    return false;
  }

  