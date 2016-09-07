/*
	@param {number[]} nums
	@return {number}
*/

var removeDuplicates = function(nums) {
	var idx=0;
	// two numbers as a group ... 
	for(var i=0; i<nums.length; i++) {
		if(i<2 || nums[i]>nums[idx-2]) nums[idx++] = nums[i];
	}
	return idx;
};

var input = [1,1,1,2,2,3,4,5,5,5];
console.log(removeDuplicates(input));

