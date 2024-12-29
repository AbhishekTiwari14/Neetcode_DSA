//Group Anagrams: Given an array of strings, group the anagrams together & return ans as vector of vectors where each vector stores all anagrams of a type. Ex. Input: strs = ["eat","tea","tan","ate","nat","bat"]; Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

vector<vector<string>> groupAnagrams(vector<string>& strs) {
        map<string, vector<string>> mp;
        for(auto s: strs){
            string org = s;
            sort(s.begin(), s.end());
            if(mp.find(s)!= mp.end()){
                mp[s].push_back(org);
            }
            else mp[s] = {org};
        }
        vector<vector<string>> ans;
          vector<string>anagrams;
        for(auto pair: mp){
            for(auto str: pair.second){
                anagrams.push_back(str);
            }
            ans.push_back(anagrams);
            anagrams = {};
        }
        return ans;
    }