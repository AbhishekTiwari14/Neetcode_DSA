//BS1: given a sorted array & 'target'; return the index of target in arr; if target not present in arr, return -1.

var search = function(nums, target) {
    let n = nums.length
    let l=0, r = n-1
    while(l<=r){
        let m = Math.floor(l + (r-l)/2)
        if(nums[m] > target) r = m-1
        else if(nums[m] < target) l = m+1
        else return m
    }
    return -1
};