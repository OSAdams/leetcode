/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let price = prices[0], profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (price > prices[i]) price = prices[i];
        profit = Math.max(profit, prices[i] - price)
    }
    return profit;
};
