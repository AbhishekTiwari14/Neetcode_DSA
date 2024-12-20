//Given an array of Uppercase Alphabets and an integer k; find the length of longest substring possible with all Alphabets same, if you can change any alphabet to any other alphabet (you can do this upto k times).

var characterReplacement = function(s, k) {
    let l=0, ans=0, maxFreq = 0
    let freq = {}
    for(let r=0; r<s.length; r++){
        freq[s[r]] = freq[s[r]] + 1 || 1
        maxFreq = Math.max(maxFreq, freq[s[r]])
        while(r-l+1 - maxFreq > k){
            freq[s[l]]--
            l++
        }
        ans = Math.max(ans, r-l+1)
    }
    return ans
};