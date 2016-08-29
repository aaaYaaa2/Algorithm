/**
 *	@param {number[]} nums
 *  @return {number}
 */

var majorityElement = function(nums){
	nums.sort(function(num1, num2){
		return num1-num2;
	})
	return nums[Math.floor(nums.length/2)];
};

// Moore's majority vote 
var majorityElement2 = function(nums){
	var count = 0, result;
	for(var i=0; i<nums.length; i++){
		if(count===0){
			result = nums[i];
			count++;
		}else if(nums[i]===result){
			count++;
		}else{
			count--;
		}
	}
}