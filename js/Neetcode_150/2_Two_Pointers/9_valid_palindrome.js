//Valid Palindrome: check if given sentence is a palindrome after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

var isPalindrome = function(s) {

    const n = s.length
    let l = 0, r = n-1
    let st = s.toLowerCase()
    while(l<=r){
        while(l<n && !/^[a-zA-Z0-9]$/.test(st[l])) l++
        while(r>=0 && !/^[a-zA-Z0-9]$/.test(st[r])) r--
        if(st[l] !== st[r]) return false
        l++
        r--
    }
    return true
};