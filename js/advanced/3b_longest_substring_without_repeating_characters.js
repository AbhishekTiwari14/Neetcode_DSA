//Find Length of Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let l=0, ans=0
    const st = new Set() 
    for(let r=0; r<s.length; r++){
        let x = s[r]
        if(!st.has(x)){
            st.add(x)
        }
        else{
            while(s[l] != x){
                st.delete(s[l])
                l++
            }
            l++
        }
        ans = Math.max(ans, r-l+1)
    }
    return ans
};