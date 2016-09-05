/*
	@param {number[]} nums
	@param {number}
*/

/*
	method1: Dynamic Programming Cases 
	> For each number, we can either added to the current product, or start a brand new product from itself 
	> since there are negative and positive solution, we need to record not only max so far, but also min so far 
*/
var maxProduct = function(nums) {
	var res = nums[0], min = nums[0], max = nums[0];
	for(var i=0; i<nums.length; i++){
		var temp = min;
		min = Math.min(Math.min(nums[i]*min, nums[i]*max), nums[i]);
		max = Math.max(Math.max(nums[i]*temp, nums[i]*max), nums[i]);
		res = Math.max(res, max);
	}
};