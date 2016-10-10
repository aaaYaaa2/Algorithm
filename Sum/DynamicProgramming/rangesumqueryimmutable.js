/*
	Range Sum Query - Immutable
*/

/*
	@constructor 
	@param {number[]} nums
*/

var NumArray = function(nums) {
	// create the sum array 
	for(var i=1; i<nums.length; i++) nums[i]+=nums[i-1];
	this.sumArr = nums;
};

/*
	@param {number} i
	@param {number} j
	@return {number}
*/

NumArray.prototype.sumRange = function(i, j){
	if(i===0){
		return this.sumArr[j];
	}else{
		return this.sumArr[j] - this.sumArr[i-1];
	}
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

 var input = [1,2,3,4,5,6,7];
 var numArray = new NumArray(input);

 console.log(numArray.sumRange(0,4));