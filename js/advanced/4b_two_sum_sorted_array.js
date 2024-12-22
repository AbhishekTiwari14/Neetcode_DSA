// Find two nos. in the sorted array which sum up to int target (& return their 1-based indeces);

var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1
    while(l<r){
        if(numbers[l] + numbers[r] == target) return [l+1, r+1]
        else if(numbers[l] + numbers[r] < target) l++
        else r--
    }
};