//return the no. of subarrays whose sum = k. 

var subarraySum = function(nums, k) {
    const prefixSum = new Map()
    prefixSum.set(0,1)
    let sum = 0, ans = 0
    for(let i=0; i<nums.length; i++){
        sum+= nums[i]
        if(prefixSum.has(sum-k)) ans+= prefixSum.get(sum-k)
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1)
    }
    return ans
};