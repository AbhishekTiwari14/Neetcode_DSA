//Buy Sell Stocks: given a prices array where prices[i] = prices of stock on ith day. Return the maximum profit one can earn by buying a stock ont jth day & selling it on kth day (j<k). Retrun 0 if no chance of making profit.

int maxProfit(vector<int>& prices) {
        int buy = prices[0];
        int profit = 0;
        for(int i=1; i<prices.size(); i++){
            int cost = prices[i] - buy;
            profit = max(profit, cost);
            buy = min(buy,prices[i]); 
        }
        return profit;
}

