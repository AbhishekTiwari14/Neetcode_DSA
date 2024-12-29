//Return true if any value in array appears atleast twice ; else return false.

//S1

bool containsDuplicate(vector<int>& nums) {
       sort(nums.begin(), nums.end());
       for(int i=0; i<nums.size()-1; i++){
           if(nums[i] == nums[i+1]) return true;
       }
       return false;
    }

//S2

bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> st;
        for(auto n: nums){
            if(st.find(n) != st.end()) return true;
            else st.insert(n);
        }
        return false;
    }