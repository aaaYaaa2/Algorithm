/*
	@param {number[]} nums
	@return {boolean}
*/

var canJump = function(nums) {
	var maxLen = 0;
	for(var i=0; i<nums.length; i++){
		if(maxLen>=i){
			maxLen = Math.max(maxLen, i+nums[i]);
		}else{
			return false;
		}
	}
	return true;
};

var input = [0];
console.log(canJump(input));