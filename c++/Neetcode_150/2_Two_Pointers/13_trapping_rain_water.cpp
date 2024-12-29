//Trapping Rain Water: given an array: "height" where each element represents height of the building, each building has width = 1 and all buildings are in-line with gap of 1 each. compute how much water it can trap after raining.(see figure)

int trap(vector<int>& height) {
        int n = height.size();
        int l=0, r=n-1;
        int maxL= height[l], maxR = height[r];
        int vol = 0;
        while(l<r){
            if(maxL <= maxR){
                l++;
                maxL = max(maxL, height[l]);
                vol+= maxL-height[l];
            }
            else{
                r--;
                maxR = max(maxR, height[r]);
                vol+= maxR-height[r];
            }
        }        
        return vol;
    }
};