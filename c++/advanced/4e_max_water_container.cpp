//You are given an arr: height, where you have to assume a line corresponding to each value of array with 2 enpoints of line being: (i, 0) & (i, height[i]). Return the maximum amount of water a container can store.

int maxArea(vector<int>& height) {
        int l=0, r=height.size()-1;
        int ans = 0;
        while(l<r){
            int h = min(height[l], height[r]);
            int w = r-l;
            ans = max(ans, h*w);
            if(height[l] < height[r]) l++;
            else r--;
        }
        return ans;
}