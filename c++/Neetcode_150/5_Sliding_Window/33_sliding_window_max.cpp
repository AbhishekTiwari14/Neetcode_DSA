//Sliding Window Max: given an int arr 'nums' & an int k. return an arr which stores the max value in each window of size k in nums.

    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
       int n = nums.size();
       deque<int> dq;
       vector<int> ans;
       for(int i=0; i<n; i++){
            while(!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();
            dq.push_back(i);
            if(dq.front() < i+1-k) dq.pop_front();
            if(i >= k-1) ans.push_back(nums[dq.front()]);
       }
       return ans;
    }