

var isPalindrome = function(s) {

    const n = s.length
    let l = 0, r = n-1
    let st = s.toLowerCase()
    const isAlphanumeric = char => /^[a-zA-Z0-9]$/.test(char)
    while(l<=r){
        while(l<n && !isAlphanumeric(s[l])) l++
        while(r>=0 && !isAlphanumeric(s[r])) r--
        if(st[l] !== st[r]) return false
        l++
        r--
    }
    return true
};