//Median of 2 Sorted Arrays: Given 2 sorted arrays, find the median of the merged sorted array.

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n1 = nums1.size();
        int n2 = nums2.size();
        if(n1>n2) return findMedianSortedArrays(nums2, nums1);
        int half = (n1+n2)/2;
        int s=0, e=n1;
        while(s<=e){
            int m1 = s + (e-s)/2;
            int m2 = half-m1;
            int l1=INT_MIN, r1= INT_MAX;
            int l2=INT_MIN, r2= INT_MAX;
            if(m1>0) l1 = nums1[m1-1];
            if(m2>0) l2 = nums2[m2-1];
            if(m1<n1) r1 = nums1[m1];
            if(m2<n2) r2 = nums2[m2];
            
            if(l1 > r2) e = m1-1;
            else if(l2 > r1) s = m1+1;
            else{
                if((n1+n2) %2 != 0){
                    return min(r1, r2);
                }
                else{
                    return double(max(l1,l2) + min(r1,r2))/2;
                }
            }   
        }
        return -1;
    }
};
