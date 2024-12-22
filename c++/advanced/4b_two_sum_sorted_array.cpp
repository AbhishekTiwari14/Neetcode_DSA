// Find two nos. in the sorted array which sum up to int target (& return their 1-based indeces);

vector<int> twoSum(vector<int>& numbers, int target) {
        int l=0, r=numbers.size()-1;
        while(l<r){
            if(numbers[l] + numbers[r] == target) return {l+1, r+1};
            else if(numbers[l] + numbers[r] < target) l++;
            else r--;
        }
        return {0,0};
    }