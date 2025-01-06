//Sliding Window Max: given an int arr 'nums' & an int k. return an arr which stores the max value in each window of size k in nums.

var maxSlidingWindow = function(nums, k) {
    const dq = []  // Monotonically Decreasing Deque to store indices for values of nums
    const ans = []
    for(let i=0; i<nums.length; i++){
        while(dq.length>0 && nums[dq[[dq.length-1]]] <= nums[i]) dq.pop() // if nums[i] > any prev element, then for next indexes(j) >= i, ans[j] != those prev elements. 
        dq.push(i)                      
        if(dq[0] < i+1-k) dq.shift()  // ie, if(window size = k+1, remove the first element) 
        if(i >= k-1) ans.push(nums[dq[0]]) //ie, if(window size >= k) push_ans;
    }
    return ans
};