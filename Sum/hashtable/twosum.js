/*
	@param {number[]} nums
	@param {number} target
	@return {number[]}
*/

var twoSum = function(nums, target){
	var table = {};
	for(var i=0; i<nums.length; i++){
		if(table[target - nums[i]]!==undefined){
			return [table[target-nums[i]], i];
		}else{
			table[nums[i]] = i;
		}
	}
	return [];
};

var input = [2,7,11,15];
console.log(twoSum(input, 26));


