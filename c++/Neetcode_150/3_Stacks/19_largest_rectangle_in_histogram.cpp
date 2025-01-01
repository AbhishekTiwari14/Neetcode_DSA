//Largest Rectangle In Histogram: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. (See figure)

int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        vector<int> pse(n,-1);
        stack<int> st;
        for(int i=0; i<n; i++){
            while(!st.empty() && heights[i] <= heights[st.top()]) st.pop();
            if(!st.empty()) pse[i] = st.top();
            st.push(i);
        }
        st = stack<int>();
        vector<int> nse(n,n);
        for(int i=n-1; i>=0; i--){
            while(!st.empty() && heights[i] <= heights[st.top()]) st.pop();
            if(!st.empty()) nse[i] = st.top();
            st.push(i);
        }
        int ans = 0;
        for(int i=0; i<n; i++){
            int area = heights[i] * (nse[i] - pse[i] - 1);
            ans = max(ans, area);
        }
        return ans;
    }