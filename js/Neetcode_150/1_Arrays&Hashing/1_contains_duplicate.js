//Return true if any value in array appears atleast twice ; else return false.

//S1:
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let n of nums){
        if(set.has(n)) return true
        else set.add(n)
    }
    return false
};

//S2:
var containsDuplicate = function(nums) {
    nums.sort()
    for(let i=1; i<nums.length; i++){
        if(nums[i] == nums[i-1]) return true
    }
    return false
};