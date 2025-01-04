//Search in Rotated Sorted Array: given a RSA & an int 'target', find it and return its index in arr; if target not present in arr, return -1

var search = function(nums, target) {
    let l = 0, r = nums.length-1
    while(l<=r){
        let m = Math.floor(l + (r-l)/2)
        if(nums[m] == target) return m
        //if we're in left part
        if(nums[l] <= nums[m]){
            //if target is also in left part (b/w l & m)
            if(target >= nums[l] && target <= nums[m]) r = m-1
            else l = m+1            
        }
        //if we're in right part
        else{
            //if target is also in right part (b/w m & r)
            if(target >= nums[m] && target <= nums[r]) l = m+1
            else r = m-1
        }
    }
    return -1
};