// Product of array except self: given an int array nums, return an ans array such that ans[i] =  product of all the elements of nums except nums[i]. (You cannot use division operator)

vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans (n,0);
        int product = 1; //prefix product
        for(int i=0; i<n; i++){
            ans[i] = product;
            product*= nums[i];
        }
        product = 1; //postfix product
        for(int i=n-1; i>=0; i--){
            ans[i]*= product;
            product*= nums[i];
        }
        return ans;
    }