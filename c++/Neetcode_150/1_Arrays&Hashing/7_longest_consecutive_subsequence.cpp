//Longest consecutive Subsequence: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence (ex. 4,5,6,7). You must write an algorithm that runs in O(n) time.

int longestConsecutive(vector<int>& nums) {
        unordered_set<int> st(nums.begin(), nums.end());
        int ans = 0;
        for(auto x: st){
            int curr = 1;
            if(st.find(x-1) != st.end()) continue;
            else{
                while(st.find(x+1) != st.end()){
                    x++;
                    curr++;
                }
                ans = max(ans, curr);
            }
        }
        return ans;
    }