//Find largest sum subarray (non-empty) in circular array: 

class Solution {
public:
    int maxSubarraySumCircular(vector<int>& nums) {
        int currMax = 0, globalMax = INT_MIN;
        int currMin = 0, globalMin = INT_MAX;
        int total = 0;
        for(int n:nums){
            currMax = max(n, currMax+n);
            currMin = min(n, currMin+n);
            globalMax = max(globalMax, currMax);
            globalMin = min(globalMin, currMin);
            total+= n;
        }
        return globalMax>0 ? max(globalMax, total - globalMin) : globalMax ;
    }
};