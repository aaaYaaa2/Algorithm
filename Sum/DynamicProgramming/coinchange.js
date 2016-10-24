/*
	@param {number[]} coins
	@param {number} amount
	@return {number}
*/


var coinChange2 = function(coins, amount){
	if(coins === undefined || coins.length===0) return -1;
	coins = coins.sort(function(a, b){ return a-b;});

	var dp = [];
	for(var i=0; i<amount+1; i++) dp[i] = 0;

	for(var i=1; i<=amount; i++){
		var localMin = -1;
		for(var j=0; j<coins.length; j++){
			if(coins[j]<=i && dp[i-coins[j]]!==-1){
				var tmp = dp[i-coins[j]]+1;
				localMin = localMin<0? tmp : (tmp<localMin? tmp : localMin);
			}
		}
		dp[i] = localMin;
	}
	return dp[amount];
};