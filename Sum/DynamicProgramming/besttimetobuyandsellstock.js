/*
	@param {number[]} prices
	@return {number}
*/

var maxProfit = function(prices){
	 var prevBuy = 0, prevSell = 0, maxProfit = Number.MIN_SAFE_INTEGER, buy = Number.MIN_SAFE_INTEGER, sell = 0;
	 for(var i=0; i<prices.length; i++){
	 	prevBuy = buy;
	 	buy = Math.max(buy, preSell-prices[i]);
	 	prevSell = sell;
	 	sell = Math.max(prevSell, preBuy+prices[i]);
	 }
	 return sell;
};