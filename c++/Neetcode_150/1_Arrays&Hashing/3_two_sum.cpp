//Two Sum: return the indeces of two nos. in the array which sum up to 'target'. (Note: There will be exactly 1 correct pair for each input).

vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> m;
        for(int i=0; i<nums.size(); i++){
            if(m.find(target-nums[i]) != m.end()){
                return {i, m[target-nums[i]]};
            }
            else m[nums[i]] = i;
        }
        return {-1, -1};
    }