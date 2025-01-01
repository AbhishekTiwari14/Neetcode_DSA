//Design Min Stack: design a stack which supports methods: push(), pop(), top() as done by a stack; but it should also support getMin() method which returns the min val in the stack. All methods must be of O(1) TC.

class MinStack {
public:
    stack<long long> st;
    long long mini;
    MinStack() {
        
    }
    
    void push(int val) {
        if(st.empty()){
            st.push(val);
            mini = val;
        }
        else if(val>=mini){
            st.push(val);
        }
        else{ //ie, when val is new mini
            st.push((2LL*val)- mini); //pushed data is <val bcoz val<mini (since, val = new mini)
            mini = val; //val is new mini
        }
    }
    
    void pop() {
        if(st.top() >= mini) st.pop();

        else{ //ie, when top element is also the min element
            mini = (2LL*mini) - st.top(); //ie, old mini = 2*new mini - modified data/val 
            st.pop(); 
        }
    }
    
    int top() {
        if(st.top() > mini) return st.top();
        else{ //ie, when modified data/val is pushed 
            return mini;
        }
    }
    
    int getMin() {
        return mini;
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */