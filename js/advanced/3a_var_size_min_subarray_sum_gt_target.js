//Minimum Size Subarray  with Sum >= target

var minSubArrayLen = function(target, nums) {
    let l = 0, ans = Number.MAX_SAFE_INTEGER, sum = 0
    for(let r=0; r<nums.length; r++){
        sum+= nums[r]
        while(sum-nums[l] >= target){
            sum-= nums[l]
            l++
        }
        if(sum >= target) ans = Math.min(ans, r-l+1)
    }
    return ans == Number.MAX_SAFE_INTEGER? 0 : ans
};