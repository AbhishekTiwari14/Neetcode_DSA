//Find Length of Longest Substring Without Repeating Characters

int lengthOfLongestSubstring(string s) {
        unordered_set<char> st;
        int ans = 0, l=0;
        for(int r=0; r<s.size(); r++){
            char x = s[r];
            if(st.find(x) == st.end()){
                st.insert(x);
            }
            else{
                while(s[l] != x){
                    st.erase(s[l]);
                    l++;
                }
                l++;
            }
            ans = max(ans, r-l+1);
        }
        return ans;
}

