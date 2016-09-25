/*
	@param {number} n
	@return {number}
*/

var numSquare = function(n) {
	if(n==0) return 0; 
	var dp = [];
	dp[0] = 0;
	for(var i=1; i<=n; i++){
		var j=1;
		var min = Number.MAX_SAFE_INTEGER;
		while(i-j*j>=0){
			min = Math.min(min, dp[i-j*j]+1);
			j++;
		}
		dp[i] = min;
	}
	return dp[n]
};