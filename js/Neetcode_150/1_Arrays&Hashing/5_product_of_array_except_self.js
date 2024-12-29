// Product of array except self: given an int array nums, return an ans array such that ans[i] =  product of all the elements of nums except nums[i]. (You cannot use division operator)

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
