//Valid Anagram: given two strings, return true if they are anagrams of each other (anagrams = words formed by rearranging the letters, ex. abcd & bdac)

//S1:
bool isAnagram(string s, string t) {
        if(s.size() != t.size()) return false;
        unordered_map<char, int> mp;
        for(auto c: s){
            mp[c]++;
        }
        for(auto c:t){
            if(mp.find(c) == mp.end()) return false;
            mp[c]--;
        }
        for(auto pair: mp){
            if(pair.second != 0) return false; 
        }
        return true;
    }

//S2:
 bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;

        sort(s.begin(), s.end());
        sort(t.begin(), t.end());
        for(int i=0; i<s.length(); i++){
            if(s[i] != t[i]) return false;
        }
        return true;
    }