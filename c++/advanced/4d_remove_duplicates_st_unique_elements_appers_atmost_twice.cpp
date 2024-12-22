//Given a sorted array nums, remove some duplicates in-place such that each unique element appears at most twice.

int removeDuplicates(vector<int>& nums) {
        int l=0, r=0;
        while(r<nums.size()){
            int count = 1;
            while(r+1<nums.size() && nums[r] == nums[r+1]){
                count++;
                r++;
            }
            int x = min(count, 2);
            while(x){
                nums[l] = nums[r];
                l++;
                x--;
            }
            r++;
        }
        return l;
    }