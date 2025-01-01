#include <iostream>
using namespace std;

class Stack {
    int *arr;
    int top;
    int capacity;

public:
    Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1; // Initialize top as -1
    }

    // Push an element
    void push(int x) {
        if (top == capacity - 1) {
            cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = x;
    }

    // Pop an element
    void pop() {
        if (top == -1) {
            cout << "Stack Underflow\n";
            return;
        }
        top--;
    }

    // Return top element
    int peek() {
        if (top == -1) {
            cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }

    // Return stack size
    int size() {
        return top + 1;
    }

    // Check if stack is empty
    bool isEmpty() {
        return top == -1;
    }
};

int main() {
    Stack st(5);

    st.push(10);
    st.push(20);
    cout << "Top element: " << st.peek() << endl;

    st.pop();
    cout << "Top after pop: " << st.peek() << endl;

    cout << "Stack size: " << st.size() << endl;
    cout << "Is empty? " << st.isEmpty() << endl;

    return 0;
}
