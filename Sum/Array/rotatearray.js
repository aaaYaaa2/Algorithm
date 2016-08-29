/**
 *	@param {number[]} nums
 *	@param {number} k
 *	@return {void} modified in-place
 */

 var rotate1 = function(nums, k) {
 	// retrieve the real k 
 	k = k%nums.length;
 	var n = nums.length-k;
 	// obtain the last k elements in original list 
 	nums = nums.splice(nums.length-k).concat(nums);
 	return nums;
 };

 var rotate2 = function(nums, k) {
 	k = k%nums.length;
 	for(var i=0; i<k; i++){
 		nums.unshift(nums.pop());
 	}
 	return nums;
 }

 var rotate3 = function(nums, k){
 	k = k%nums.length;
 	var tail = nums.splice(nums.length-k);
 	// for(var i=)
 }

 var input = [1,2];
 var res = rotate1(input, 1);
 console.log(res);