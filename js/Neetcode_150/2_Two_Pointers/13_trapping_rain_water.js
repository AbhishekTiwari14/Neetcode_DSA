//Trapping Rain Water: given an array: "height" where each element represents height of the building, each building has width = 1 and all buildings are in-line with gap of 1 each. compute how much water it can trap after raining.(see figure)

var trap = function(height) {
    let l = 0, r = height.length-1
    let maxheightL = height[l], maxheightR = height[r]
    let vol = 0
    while(l<r){
        if(maxheightL < maxheightR){
            l++
            maxheightL = Math.max(maxheightL, height[l])
            vol+= maxheightL - height[l]
        }
        else{
            r--
            maxheightR = Math.max(maxheightR, height[r])
            vol+= maxheightR - height[r]
        }
    }
    return vol
};
