//Buy Sell Stocks: given a prices array where prices[i] = prices of stock on ith day. Return the maximum profit one can earn by buying a stock ont jth day & selling it on kth day (j<k). Retrun 0 if no chance of making profit.

var maxProfit = function(prices) {
    let maxi = 0;
    let cost = prices[0];
    for(let i=1; i<prices.length; i++){
        if(cost > prices[i]) cost = prices[i];
        else{
            maxi = Math.max(maxi, prices[i] - cost);
        }
    }
    return maxi;
};
