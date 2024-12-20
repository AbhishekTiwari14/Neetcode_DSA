//Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

var numOfSubarrays = function(arr, k, threshold) {
    let sum=0, l=0, ans=0;
    for(let r=0; r<arr.length; r++){
        if(r-l+1 > k){
            sum-= arr[l];
            l++;
        }
        sum+= arr[r];
        if(r-l+1 == k && sum/k >= threshold) ans++; 
    }
    return ans;
};