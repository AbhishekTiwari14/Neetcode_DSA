//Find largest sum subarray (non-empty) in circular array: 

var maxSubarraySumCircular = function(nums) {
    let currMax = 0, globalMax = Number.MIN_SAFE_INTEGER
    let currMin = 0, globalMin = Number.MAX_SAFE_INTEGER
    let total = 0
    for(let n of nums){
        currMax = Math.max(currMax+n, n)
        currMin = Math.min(currMin+n, n)
        globalMax = Math.max(globalMax, currMax)
        globalMin = Math.min(globalMin, currMin)
        total+= n
    }
    return globalMax>0 ? Math.max(globalMax, total-globalMin) : globalMax
};