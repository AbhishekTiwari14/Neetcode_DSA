//Koko Eating Bananas: given an array 'piles' where piles[i] = no. of bananas in ith pile & an int 'h'. Find the minimum speed with which koko should eat bananas(no.of bananas/hour) such that she eats all bananas within 'h' hours. Note: if she finishes all bananas in a pile within an hour, she cannot move to next pile untill the current hour is complete.

var minEatingSpeed = function(piles, h) {
    let l = 1, r = Math.max(...piles)
    let ans = r
    while(l<=r){
        let m = Math.floor(l + (r-l)/2)
        let reqTime = 0n
        for(let x of piles){
            reqTime+= BigInt(Math.ceil(x/m))
        }
        if(reqTime>h) l=m+1
        else{
            ans = m
            r = m-1
        }
    } 
    return ans
};