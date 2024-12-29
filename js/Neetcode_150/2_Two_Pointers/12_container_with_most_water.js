//Container With Most Water: You are given an arr: height, where you have to assume a line corresponding to each value of array with 2 enpoints of line being: (i, 0) & (i, height[i]). Return the maximum amount of water a container can store (image attached).

var maxArea = function(height) {
    let l=0, r=height.length-1
    let ans = 0
    while(l<r){
        let h = Math.min(height[l], height[r])
        let w = r-l
        ans = Math.max(ans, h*w)
        if(height[r] > height[l]) l++
        else r--
    }
    return ans
};