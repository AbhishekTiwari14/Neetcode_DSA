//Find pivot index in the given array: pivot index = index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If no pivot index, return -1

var pivotIndex = function(nums) {
    let n = nums.length;
    const prefixSum = new Array(n).fill(0)
    const postfixSum = new Array(n).fill(0)
    let sum = 0;
    for(let i=0; i<n; i++){
        sum+= nums[i]
        prefixSum[i] = sum
    }
    sum = 0
    for(let i=n-1; i>=0; i--){
        sum+= nums[i]
        postfixSum[i] = sum
    }
    for(let i=0; i<n; i++){
        if(prefixSum[i] == postfixSum[i]) return i
    }
    return -1
};