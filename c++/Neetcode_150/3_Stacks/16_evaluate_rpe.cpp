//Evaluate Reverse Polish Expression: RPE => array contating nos. and operands are give and each operand applies to last 2 nos. on left of the operand. Evaluate the array and return the ans val.

int evalRPN(vector<string>& tokens) {
        stack<int> st;
        unordered_map<string, function<int(int,int)>> operators = {
            {"+", [](int a, int b) { return a+b; }},
            {"-", [](int a, int b) { return a-b; }},
            {"*", [](int a, int b) { return a*b; }},
            {"/", [](int a, int b) { return a/b; }},
        };
        for(auto& t: tokens){
            if(operators.find(t) != operators.end()){
                int a = st.top();
                st.pop();
                int b = st.top();
                st.pop();
                st.push(operators[t](b, a));
            }
            else st.push(stoi(t));
        }
        return st.top();
    }