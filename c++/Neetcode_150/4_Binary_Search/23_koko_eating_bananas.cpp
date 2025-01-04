///Koko Eating Bananas: given an array 'piles' where piles[i] = no. of bananas in ith pile & an int 'h'. Find the minimum speed with which koko should eat bananas(no.of bananas/hour) such that she eats all bananas within 'h' hours. Note: if she finishes all bananas in a pile within an hour, she cannot move to next pile untill the current hour is complete.

int minEatingSpeed(vector<int>& piles, int h) {
        int l = 1, r = *max_element(piles.begin(), piles.end());
        int ans = r;
        while(l<=r){
            int m = l + (r-l)/2;
            long long reqTime = 0;
            for(auto x: piles){
                reqTime+= (x+m-1)/m; // ie, = ceil(x/m) 
            }
            if(reqTime > h) l = m+1;
            else{
                ans = m;
                r = m-1;
            } 
        }
        return ans;   
    }