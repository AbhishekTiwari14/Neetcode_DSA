//Longest consecutive Subsequence: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence (ex. 4,5,6,7). You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let ans = 0
    for(let n of nums){
        let curr = 1;
        if(set.has(n-1)) continue
        else{
            while(set.has(n+1)){
                n++
                curr++
            }
            ans = Math.max(ans, curr)
        }
    }
    return ans
};