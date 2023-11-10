/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    var buyLow = prices[0];
    var sellHigh;
    var profit = 0;
    var own = false;

    for (var i = 1; i < prices.length; i++) {

        if (own) { 

            if (sellHigh < prices[i]) {
                
                sellHigh = prices[i];

            } else {

                own = false;
                profit += sellHigh - buyLow;
                buyLow = prices[i];
            }

        } else {
            
            if (buyLow < prices[i]) {

                own = true;
                sellHigh = prices[i];

            } else {

                buyLow = prices[i];
            }
        }
    }
    
    if (own) {

        profit += sellHigh - buyLow;
    }

    return profit;
}

// You are given an integer array prices
// where prices[i] is the price of a
// given stock on the ith day.

// On each day, you may decide to
// buy and/or sell the stock. You can
// only hold at most one share of
// the stock at any time. However, you
// can buy it then immediately sell it
// on the same day.

// Find and return the maximum profit
// you can achieve.
