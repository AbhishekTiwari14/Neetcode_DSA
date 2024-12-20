//Check if there exists a subarray of size <= k+1 such that it has a repeating/duplicate no. in it.

var containsNearbyDuplicate = function(nums, k) {
    let l = 0
    const st = new Set()
    for(let r=0; r<nums.length; r++){
        if(r-l > k){
            st.delete(nums[l])
            l++
        }
        if(st.has(nums[r])) return true
        st.add(nums[r])
    }
    return false
};