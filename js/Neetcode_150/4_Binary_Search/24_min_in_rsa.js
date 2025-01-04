//Find Min. In Rotated Sorted Srray: Given the sorted rotated array nums of unique elements, return the minimum element of this array.

var findMin = function(nums) {
    let ans = nums[0]
    let l = 0, r = nums.length-1
    while(l<=r){
        //if array is completely sorted, ans = nums[0]
        if(nums[l] <= nums[r]) return Math.min(ans, nums[l])

        let m = Math.floor(l + (r - l) / 2);
        ans = Math.min(ans, nums[m])
        // if we're in left sorted part, move to right sorted
        if(nums[l] <= nums[m]) l = m+1
        //if we're in right sorted part, move to left sorted part
        else r = m-1
    }
    return ans
};
