//Evaluate Reverse Polish Expression: RPE => array contating nos. and operands are give and each operand applies to last 2 nos. on left of the operand. Evaluate the array and return the ans val.

//S1: Short Solution 

let stack = []
    const operators = {  //mapped operators with fxns. that perform the operation & give result
        '+': (b, a) => a + b,
        '-': (b, a) => a - b,
        '*': (b, a) => a * b,
        '/': (b, a) => Math.trunc(a / b)
    };
    for(let t of tokens){
        if(operators[t]){
            stack.push(operators[t](stack.pop(), stack.pop()))
        }
        else stack.push(Number(t))
    }
    return stack[stack.length-1]
};

// S2: Long Solution 

var evalRPN = function(tokens) {
    let stack = []
    for(let t of tokens){
        if(t === '+'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(a+b)
        }
        else if(t === '*'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(a*b)
        }
        else if(t === '-'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b-a)
        }
        else if(t === '/'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Math.trunc(b/a))
        }
        else stack.push(Number(t))
    }
    return stack[stack.length-1]
};