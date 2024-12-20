//Find largest sum subarray (non-empty)

int kadanes(vector<int>& nums) {
    int max_sum = INT_MIN;
    int curr_sum = 0;

    for (int n : nums) {
        curr_sum = max(n, curr_sum + n);
        max_sum = max(max_sum, curSum);
    }
    return max_sum;
}
