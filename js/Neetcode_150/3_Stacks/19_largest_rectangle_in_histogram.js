//Largest Rectangle In Histogram: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram. (See figure)

var largestRectangleArea = function(heights) {
    let n = heights.length
    let pse = new Array(n).fill(-1)
    let stack = []
    for(let i=0; i<n; i++){
        while(stack.length && heights[i] <= heights[stack[stack.length-1]]) stack.pop()
        if(stack.length) pse[i] = stack[stack.length-1]
        stack.push(i)
    }
    stack = []
    let nse = new Array(n).fill(n)
    for(let i=n-1; i>=0; i--){
        while(stack.length && heights[i] <= heights[stack[stack.length-1]]) stack.pop()
        if(stack.length) nse[i] = stack[stack.length-1] 
        stack.push(i)
    }
    let ans = 0
    for(let i=0; i<n; i++){
        let area = heights[i] * (nse[i] - pse[i] - 1) 
        ans = Math.max(ans, area)
    }
    return ans
};