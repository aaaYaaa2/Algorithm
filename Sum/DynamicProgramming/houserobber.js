/*
	@param {number[]} nums
	@return {number}
*/

var rob = function(nums) {
	if(nums===undefined || nums.length===0) return 0; 
	var dp = [];
	var first = new recordHelper(nums[0], 0);
	dp.push(first);
	for(var i=1; i<nums.length; i++){
		var include = nums[i] + dp[i-1].exclude;
		var exclude = dp[i-1].include;
		include = Math.max(include, exclude);
		dp[i] = new recordHelper();

		dp[i].include = include;
		dp[i].exclude = exclude;
	}
	return Math.max(dp[nums.length-1].include, dp[nums.length-1].exclude);
};

function recordHelper(include, exclude){
	this.include = include;
	this.exclude = exclude;
}

var input = [6,8];
console.log(rob(input));