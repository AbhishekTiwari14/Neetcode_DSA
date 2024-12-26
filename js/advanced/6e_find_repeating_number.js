//Given an array 'nums' of size 'n+1' where each element is in range [1, n] & has exactly one repeating no. (2 or more occurences), find the repeating no.

var findDuplicate = function(nums) {
    let slow = 0, fast = 0
    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow === fast){
            slow = 0
            while(slow !== fast){
                slow = nums[slow]
                fast = nums[fast]
            }
            return slow
        }
    }
    return 0
};
