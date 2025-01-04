//Search in Rotated Sorted Array: given a RSA & an int 'target', find it and return its index in arr; if target not present in arr, return -1

int search(vector<int>& nums, int target) {
        int n = nums.size();
        int s = 0, e = n-1;
        while(s<=e){
            int mid = s + ((e-s)/2);
            if(nums[mid] == target) return mid;
            //If we're in left part [s->mid] 
            if(nums[s] <= nums[mid]){
                //if element in this sorted part
                if(nums[s] <= target && target <= nums[mid]){
                    e = mid-1;
                }
                //element not in this sorted part 
                else{
                    s = mid+1;
                }
            }
            //If we're in right part [mid->e]
            else{
                //if element in this sorted part
                if(nums[mid] <= target && target <= nums[e]){
                    s = mid+1;
                }
                //element not in this sorted part 
                else{
                    e = mid-1;
                }
            }
        }
        return -1;
    }