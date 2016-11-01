/*
	@param {number[]} nums
	@return {number}
*/

var rob2 = function(nums){
	if(nums.length === 1) return nums[0];
	return Math.max(rob(nums, 0, nums.length-2), rob(nums, 1, nums.length-1));
};

function rob(num, lo, hi){
	var include = 0, exclude = 0;
	for(var i=lo; i<=hi; i++){
		var i = include, e = exclude;
		include = e + num[i];
		exclude = Math.max(e, i);
	}
	return Math.max(include, exclude);
}

