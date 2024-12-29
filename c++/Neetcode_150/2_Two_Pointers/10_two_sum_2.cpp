//Two Sum 2 (sorted array) : given a sorted array, return the indeces of the two values which sum up to 'target'. (Be assured that there will be exactly 1 solution).

vector<int> twoSum(vector<int>& numbers, int target) {
        int l=0, r=numbers.size()-1;
        while(l<r){
            if(numbers[l] + numbers[r] == target) return {l+1, r+1};
            else if(numbers[l] + numbers[r] < target) l++;
            else r--;
        }
        return {0,0};
    }