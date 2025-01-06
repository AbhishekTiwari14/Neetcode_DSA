// Permutation in String: Given two strings s1 and s2, return true if a substring of s2 is a 
//permutation of s1, or false otherwise.

var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false
    let ar1 = new Array(26).fill(0) 
    let ar2 = new Array(26).fill(0)
    for(let i=0; i<s1.length; i++){
        ar1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        ar2 [s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
    } 
    let l=0;
    for(let r=s1.length; r<s2.length; r++){
        if(ar1.every((val, idx) => val === ar2[idx])) return true;
        let ind1 = s2.charCodeAt(r) - 'a'.charCodeAt(0)
        ar2[ind1]++;
        let ind2 = s2.charCodeAt(l) - 'a'.charCodeAt(0)
        ar2[ind2]-- 
        l++
    }
    if(ar1.every((val, idx) => val === ar2[idx])) return true;
    else return false
};
