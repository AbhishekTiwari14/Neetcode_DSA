//Valid Parentheses: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid mathematically.

var isValid = function(s) {
    let stack = []
    for(let c of s){
        if(c==='(' || c==='{'||c==='[') stack.push(c)
        else{
            if(!stack.length) return false;
            let x = stack[stack.length-1]
            if(
                (c === ')' && x === '(') || 
                (c === '}' && x === '{') || 
                (c === ']' && x === '[')
            ) stack.pop()
            else return false
        }
    }
    return stack.length === 0
};