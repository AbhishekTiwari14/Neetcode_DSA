//Remove duplicates from sorted array and return no. of unique values in it.

var removeDuplicates = function(nums) {
    let l = 0
    for(let r=1; r<nums.length; r++){
        if(nums[r] !== nums[l]){
            nums[l+1] = nums[r]
            l++
        }
    }
    return l+1
};