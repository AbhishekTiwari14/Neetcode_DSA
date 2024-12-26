//Given an array 'nums' of size 'n+1' where each element is in range [1, n] & has exactly one repeating no. (2 or more occurences), find the repeating no.

int findDuplicate(vector<int>& nums) {
        int slow = 0, fast = 0;
        while(true){
            slow = nums[slow];
            fast = nums[fast];
            fast = nums[fast];
            if(slow == fast){
                slow = 0;
                while(slow != fast){
                    slow = nums[slow];
                    fast = nums[fast];
                }
                return slow;
            } 
        }
        return 0;
    }