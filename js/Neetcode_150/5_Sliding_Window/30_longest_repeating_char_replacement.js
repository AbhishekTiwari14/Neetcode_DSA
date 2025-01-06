//Longest Repeating Char Replacement: Given a string s (containing only uppercase chars.) & int k; You can choose atmost k chars in s & replace them with any other uppercase char. Return the length of the longest substring containing the same letter.

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
