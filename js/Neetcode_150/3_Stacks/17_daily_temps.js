// Daily Tempeartures: given a 'Temps' array, create an ans array such that for each val in Temps array, ans[i] = index - i where index = smallest index for which Temps[index] > Temps[i], (ie, smallest distance on right for which temp. is larger than curr temp); if no such index -> ans[i] = 0.

var dailyTemperatures = function(temperatures) {
    let n = temperatures.length
    let ans = new Array(n).fill(0)
    let stack = []
    for(let i=0; i<n; i++){
        while(stack.length > 0 && stack[stack.length-1][0] < temperatures[i]){
            let ind = stack[stack.length-1][1]
            ans[ind] = i - ind
            stack.pop()
        }
        stack.push([temperatures[i], i])
    }
    return ans
};