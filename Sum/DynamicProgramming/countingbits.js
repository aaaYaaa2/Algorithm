/*
	@param {number} num
	@return {number[]}
*/

var countBits = function(num){
	var pow = 1, dp = [];
	for(var i=0; i<=num; i++) dp[i] = 0;

	for(var j=1, t=0; j<=num; j++, t++){
		if(j===pow){
			pow*=2;
			t = 0;
		}
		dp[j] = dp[t] + 1;
	}
	return dp;
};