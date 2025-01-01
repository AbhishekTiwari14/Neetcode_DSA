//Valid Parentheses: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid mathematically.

bool isValid(string s) {
        stack<char> st;
        for(auto i: s){
            if(i == '(' || i== '{' || i== '['){
                st.push(i);
            }
            else{
                if(st.empty()) return false;
                char open = st.top();
                if((open == '(' && i==')') || (open == '{' && i=='}') || (open == '[' && i==']')){
                    st.pop();
                }
                else return false;
            }
        }
        return st.empty();
    }