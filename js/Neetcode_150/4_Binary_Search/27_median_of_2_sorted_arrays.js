//Median of 2 Sorted Arrays: Given 2 sorted arrays, find the median of the merged sorted array.

var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length 
    let n2 = nums2.length
    if(n1>n2) return findMedianSortedArrays(nums2, nums1)  //we want to apply BS on smaller array(TC = O(min(n1,n2)))
    let s=0, e=n1
    let half = Math.floor((n1+n2)/2) //each portion (left & right) must have exactly 'half' no. of elements
    while(s<=e){
        let m1 = Math.floor(s + (e-s)/2) //m1 = count of no. of elements of nums1 which are in left portion
        let m2 = half-m1 // m2 = count of no. of elements of nums2 which are in left portion
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER  
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER
        if(m1>0) l1 = nums1[m1-1] //l1 = last element of nums1 which is part of left portion
        if(m2>0) l2 = nums2[m2-1] //l2 = last element of nums2 which is part of left portion
        if(m1<n1) r1 = nums1[m1] //r1 = first element of nums1 which is part of right portion
        if(m2<n2) r2 = nums2[m2] //r2 = first element of nums2 which is part of right portion
        
        if(l1>r2) e=m1-1  
        else if(l2>r1) s=m1+1
        else{
            if((n1+n2) % 2 !== 0) return Math.min(r1,r2)
            else return (Math.max(l1,l2) + Math.min(r1,r2))/2 //avg of 2 middle elements
        }  
    } 
    return -1
};