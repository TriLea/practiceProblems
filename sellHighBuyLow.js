/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    var buyLow = prices[0];
    var sellHigh = prices[0];
    var pTradeL = prices[0];

    for (var i = 1; i < prices.length; i++) {

        if (pTradeL < prices[i]) {

            if (sellHigh - buyLow < prices[i] - pTradeL) {

                buyLow = pTradeL;
                sellHigh = prices[i];
            }

        } else {

            pTradeL = prices[i];
        }
    }

    return sellHigh - buyLow;
};

// You are given an array prices where
// prices[i] is the price of a given
// stock on the ith day.

// You want to maximize your profit by
// choosing a single day to buy one
// stock and choosing a different day
// in the future to sell that stock.

// Return the maximum profit you can achieve
// from this transaction. If you cannot
// achieve any profit, return 0.
