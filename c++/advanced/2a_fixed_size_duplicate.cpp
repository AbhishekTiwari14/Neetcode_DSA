//Check if there exists a subarray of size <= k+1 such that it has a repeating/duplicate no. in it.

bool containsNearbyDuplicate(vector<int>& nums, int k) {
        int n = nums.size();
        int l =0;
        unordered_set<int> st;
        for(int r=0; r<n; r++){
            if(r-l > k){ 
                st.erase(nums[l]);
                l++;
            }
            if(st.find(nums[r]) != st.end()) return true;
            st.insert(nums[r]);
        }
        return false;
}