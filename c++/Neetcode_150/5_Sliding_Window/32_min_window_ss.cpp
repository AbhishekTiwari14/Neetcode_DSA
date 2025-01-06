//Minimum Window Substring: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates counts) is included in the window. If there is no such substring, return the empty string "".

    string minWindow(string s, string t) {
        unordered_map<char, int> mapS;
        unordered_map<char, int> mapT;
        for(auto c: t) mapT[c]++;
        int ansL = -1, ansR = -1, ansLen = INT_MAX;
        int charMatches = 0, reqMatches = mapT.size();
        int l=0; 
        for(int r=0; r<s.size(); r++){
            mapS[s[r]]++;
            if(mapT.find(s[r]) != mapT.end() && mapS[s[r]] == mapT[s[r]]) charMatches++;
            while(charMatches == reqMatches){
                if(r-l+1 < ansLen){
                    ansLen = r-l+1;
                    ansL = l, ansR = r;
                }
                mapS[s[l]]--; 
                if(mapT.find(s[l]) != mapT.end() && mapS[s[l]] == mapT[s[l]] - 1) charMatches--;
                l++;
            }
        }
        if(ansL == -1) return "";
        string ans = ""; 
        for(int i=ansL; i<=ansR; i++){
            ans+= s[i];
        }
        return ans;
    }