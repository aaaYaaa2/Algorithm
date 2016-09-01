/*
	@param {number[]} nums
	@return {number[]} 
*/

var productExceptSelf = function(nums) {
	// result array 
	var res = [];
	res[0] = 1;
	for(var i=1; i<nums.length; i++){
		res[i] = res[i-1]*nums[i-1];
	}// build the product from the front 
	var prod=1;
	for(i=nums.length-1; i>=0; i--){
		res[i]*=prod;
		prod*=nums[i];
	}// build result from the back 
	return res;
};

var input=[1,2,3,6,5,6];
console.log(productExceptSelf(input));