//return the no. of subarrays whose sum = k. 

int subarraySum(vector<int>& nums, int k) {
        int sum=0, ans=0;
        unordered_map<int,int> m;
        m[0] = 1;
        for(int i=0; i<nums.size(); i++){
            sum+=nums[i];
            int diff = sum-k;
            if(m.find(sum-k) != m.end()){
                ans+= m[sum-k];
            }
            m[sum]++;
        }
        return ans;
    }