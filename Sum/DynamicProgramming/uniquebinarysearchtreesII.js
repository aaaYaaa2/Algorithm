// Definition for a binary tree node
function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}

/*
	@param {number} n
	@return {number}
*/

var generateTrees = function(n){
	var dp = [];
	for(var i=0; i<=n; i++) dp[i] = 1;
	if(n<=1) return dp[n];

	for(var j=2; j<=n; j++){
		dp[j] = 0;
		for(var c=1; c<=j; c++){
			dp[j]+=dp[c-1]*dp[j-c];
		}
	}
	return dp[n];
};

console.log(generateTrees(4));