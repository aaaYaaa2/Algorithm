/*
	@param {number[]} nums
	@return {number}
*/
// method one 
var maxSubarray = function(nums) {
	var dp = [];
	dp[0] = nums[0];
	var max = dp[0];
	for(var i=1; i<nums.length; i++){
		// the if minus start from new trick 
		dp[i] =  nums[i] + (dp[i-1]>0? dp[i-1] : 0);
		max = Math.max(max, dp[i]);
	}
	return max;
}; // 172 

var input = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubarray(input));

// method two is to compute the sum, then check the maximum difference 
// it is also time O(n) but will be longer 

// the previous method can be rewritten to save space 

var maxSubarray1 = function(nums){
	var max=0;
	for(var i=1; i<nums.length; i++){
		nums[i] = nums[i] + Math.max(nums[i-1]>0? nums[i-1] : 0);
		max = Math.max(max, nums[i]);
	}
	return max;
};

console.log(maxSubarray1(input));