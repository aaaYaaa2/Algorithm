/*
	@param {number[]} price
	@return {number}
*/
/*
	A greedy algorithm is an algorithm paradigm that follows the problem solving heuristic of making the locally 
	optimal choice at each stage with the hope of finding a global optimum. 
*/

var maxProfit1 = function(prices) {
	var profit = 0;
	for(var i=0; i<prices.length-1; i++) {
		if(prices[i+1]>prices[i]){
			profit+=(prices[i+1]-prices[i]);
		}
	}
	return profit;
};

var input = [23,12];
console.log(maxProfit1(input));

