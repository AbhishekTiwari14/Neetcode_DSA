//Group Anagrams: Given an array of strings, group the anagrams together & return ans as vector of vectors where each vector stores all anagrams of a type. Ex. Input: strs = ["eat","tea","tan","ate","nat","bat"]; Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
    let map = new Map()
    for(let str of strs){
        let sorted = str.split('').sort().join('')
        if(!map.has(sorted)) map.set(sorted, [str])
        else map.get(sorted).push(str)
    }
    return Array.from(map.values())
};