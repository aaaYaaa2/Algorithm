/**
 *  @param {number[]} prices
 *	@return {number}
 */

 var maxProfit = function(prices) {
 	// keep two global vars 
 	var smallest = Number.MAX_SAFE_INTEGER,
 		profit = 0;

 	for(var i=0; i<prices.length; i++) {
 		smallest = prices[i]<smallest? prices[i] : smallest;
 		profit = (prices[i]-smallest) > profit? (prices[i]-smallest) : profit;
 	}
 	return profit;
 }

 var input = [2,9,14,3,6,7,10];
 var res = maxProfit(input);

 console.log(res);