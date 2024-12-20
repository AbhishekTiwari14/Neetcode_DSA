//Minimum Size Subarray  with Sum >= target

int minSubArrayLen(int target, vector<int>& nums) {
        int l=0, sum=0, ans=INT_MAX;
        for(int r=0; r<nums.size(); r++){
            sum+= nums[r];
            while(sum-nums[l] >= target){
                sum-= nums[l];
                l++;
            }
            if(sum>= target) ans = min(ans, r-l+1);
        }
        return ans == INT_MAX ? 0 : ans;
}