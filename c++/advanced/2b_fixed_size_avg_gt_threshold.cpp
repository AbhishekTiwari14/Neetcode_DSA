//Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        int sum=0, l=0, ans=0;
        for(int r=0; r<arr.size(); r++){
            if(r-l+1 > k){
                sum-= arr[l];
                l++;
            }
            sum+= arr[r];
            if(r-l+1 == k && sum/k >= threshold) ans++; 
        }
        return ans;
}