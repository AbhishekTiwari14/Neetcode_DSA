//3 Sum: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that nums[i] + nums[j] + nums[k] == 0 and i!=j!=k.

var threeSum = function(nums) {
    const ans = []
    const n = nums.length
    nums.sort((a, b) => a - b)
    for(let i=0; i<n; i++){
        if(i>0 && nums[i] === nums[i-1]) continue
        let l=i+1
        let r=n-1
        while(l<r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum === 0){ 
                ans.push([nums[i], nums[l], nums[r]])
                l++;
                while(l<r && nums[l-1] === nums[l]) l++
            }
            else if(sum < 0) l++
            else r--
        }
    }
    return ans
};