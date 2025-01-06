//Minimum Window Substring: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates counts) is included in the window. If there is no such substring, return the empty string "".

var minWindow = function(s, t) {
    let mapT = new Map()
    let mapS = new Map()
    for(let c of t) mapT.set(c, 1 + (mapT.get(c) || 0)) 
    let need = mapT.size, have = 0
    let ansSS = [-1,-1]
    let ansLen = Number.MAX_SAFE_INTEGER
    let l=0  
    for(let r=0; r<s.length; r++){
        let c = s[r]
        mapS.set(c, 1 + (mapS.get(c) || 0))
        if(mapT.has(c) && mapS.get(c) === mapT.get(c)) have++
        while(have == need){
            if(r-l+1 < ansLen){
                ansLen = r-l+1
                ansSS = [l,r]
            }
            mapS.set(s[l], mapS.get(s[l]) - 1);
            if (mapT.has(s[l]) && mapS.get(s[l]) < mapT.get(s[l])) have--;
            l++
        }
    }
    return ansSS[0] == -1? "" : s.slice(ansSS[0], ansSS[1]+1)
};
