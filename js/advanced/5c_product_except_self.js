// given an array nums, return an array ans such that ans[i] = product of all elements of nums except nums[i]. (you can't use /). Also, you can't take any extra space other than ans array

var productExceptSelf = function(nums) {
    const ans = []
    let n = nums.length, product = 1
    for(let i=0; i<n; i++){
        ans[i] = product
        product*= nums[i]
    }
    product = 1
    for(let i=n-1; i>=0; i--){
        ans[i]*= product
        product*= nums[i]
    }
    return ans
};