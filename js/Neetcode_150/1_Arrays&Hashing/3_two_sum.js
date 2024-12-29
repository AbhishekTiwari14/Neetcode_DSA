//Two Sum: return the indeces of two nos. in the array which sum up to 'target'. (Note: There will be exactly 1 correct pair for each input).

var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i])){
            const prevIndex = map.get(target-nums[i])
            return [prevIndex, i]
        }
        else map.set(nums[i], i)
    }
    return
};