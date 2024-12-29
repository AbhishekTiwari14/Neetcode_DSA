//3 Sum: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that nums[i] + nums[j] + nums[k] == 0 and i!=j!=k.

vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        int n = nums.size();
        sort(nums.begin(), nums.end());
        for(int i=0; i<n; i++){
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i+1;
            int r = n-1;
            while(l<r){
                int sum = nums[i] + nums[l] + nums[r];
                if(sum > 0) r--;
                else if(sum < 0) l++;
                else{
                    ans.push_back({nums[i], nums[l], nums[r]});
                    l++;
                    while(l<r && nums[l-1] == nums[l]) l++;
                }
            }
        }
        return ans;
    }