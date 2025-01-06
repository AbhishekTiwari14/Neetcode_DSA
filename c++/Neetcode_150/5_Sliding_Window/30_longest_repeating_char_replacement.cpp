//Longest Repeating Char Replacement: Given a string s (containing only uppercase chars.) & int k; You can choose atmost k chars in s & replace them with any other uppercase char. Return the length of the longest substring containing the same letter.

int characterReplacement(string s, int k) {
        vector<int> freq(26,0);
        int l=0, ans=0;
        for(int r=0; r<s.size(); r++){
            freq[s[r]-'A']++;
            int maxFreq = *max_element(freq.begin(), freq.end());
            while(r-l+1 - maxFreq > k){
                freq[s[l]-'A']--;
                l++;
            }
            ans = max(ans, r-l+1);
        }
        return ans;
    }