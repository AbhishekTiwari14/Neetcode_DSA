//Permutation in String: Given two strings s1 and s2, return true if a substring of s2 is a 
//permutation of s1, or false otherwise.

 bool checkInclusion(string s1, string s2) {
        if(s1.size() > s2.size()) return false;
        vector<int> ar1(26,0);
        vector<int> ar2(26,0);
        for(int i=0; i<s1.size(); i++){
            ar1[s1[i]-'a']++;
            ar2[s2[i]-'a']++;
        }
        int matches = 0;
        for(int i=0; i<26; i++){
            if(ar1[i] == ar2[i]) matches++;
        }
        int l=0;
        for(int r=s1.size(); r<s2.size(); r++){
            if(matches == 26) return true;
            int index = s2[r] -'a';
            ar2[index]++;
            if(ar2[index] == ar1[index]) matches++;
            else if(ar2[index] == ar1[index] + 1) matches--;
            int ind = s2[l] -'a';
            ar2[ind]--;
            if(ar1[ind] == ar2[ind]) matches++;
            else if(ar1[ind]-1 == ar2[ind]) matches--;
            l++;
        }
        return matches == 26;
    }