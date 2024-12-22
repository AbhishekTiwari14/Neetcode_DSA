//Given a sorted array nums, remove some duplicates in-place such that each unique element appears at most twice.

var removeDuplicates = function(nums) {
    let l=0, r=0
    while(r<nums.length){
        let count = 1
        while(r<nums.length-1 && nums[r] == nums[r+1]){
            r++
            count++
        } 
        let x = Math.min(count, 2)
        while(x){
            nums[l] = nums[r]
            l++
            x--
        }
        r++
    }
    return l
};