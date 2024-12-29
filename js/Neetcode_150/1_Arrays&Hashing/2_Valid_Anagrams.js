//Valid Anagram: given two strings, return true if they are anagrams of each other (anagrams = words formed by rearranging the letters, ex. abcd & bdac)

//S1:
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let map = new Map()
    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1)
    }
    for(let char of t){
        if(!map.has(char)) return false
        map.set(char, map.get(char) - 1);
    }
   for(let [char, freq] of map){
    if(freq !== 0) return false
   }
    return true
};

//S2:
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    for(let i=0; i<s.length; i++){
        if(s[i] !== t[i]) return false
    }
    return true
};