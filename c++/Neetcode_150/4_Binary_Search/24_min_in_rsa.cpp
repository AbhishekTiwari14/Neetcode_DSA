//Find Min. In Rotated Sorted Srray: Given the sorted rotated array nums of unique elements, return the minimum element of this array.

int findMin(vector<int>& nums) {
        int s = 0, e = nums.size()-1;
        int ans = nums[0];
        while(s<=e){
            //if search space is already sorted
            if(nums[s] <= nums[e]){
                ans = min(ans, nums[s]);
                break;
            }
            int mid = s+ ((e-s)/2);
            //if left part[s->m] is sorted
            if(nums[s]<=nums[mid]){
                ans = min(ans, nums[s]);
                // now move to right part as min. of left part(ie, nums[s]) is already obtained
                s = mid+1;
            }
            //if right part[m->e] is sorted
            else{
                ans = min(ans, nums[mid]);
                // now move to leftt part as min. of rightt part(ie, nums[mid]) is already obtained
                e = mid-1;
            }
        }
        return ans;
    }