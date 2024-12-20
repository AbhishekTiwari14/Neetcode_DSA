//Find largest sum subarray (non-empty)

function kadanes(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let curSum = 0;

    for (let n of nums) {
        curSum = Math.max(curSum+ n, n);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}