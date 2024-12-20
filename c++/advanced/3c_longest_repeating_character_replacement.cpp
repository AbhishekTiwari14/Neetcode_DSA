//Given an array of Uppercase Alphabets and an integer k; find the length of longest substring possible with all Alphabets same, if you can change any alphabet to any other alphabet (you can do this upto k times).

int characterReplacement(string s, int k) {
        vector<int> freq(26,0);
        int l =0, ans = 0;
        for(int r=0; r<s.size(); r++){
            freq[s[r] - 'A']++;
            int maxFreq = *max_element(freq.begin(), freq.end());
            while(r-l+1 - maxFreq > k){
                freq[s[l] - 'A']--;
                l++;
            }
            ans = max(ans, r-l+1); 
        }
        return ans;
    }