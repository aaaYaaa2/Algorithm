/**
 *	@param {number[]} nums
 *	@param {number}
 */

 var removeDuplicates = function(nums){
 	var idx=1;
 	// since we still need to keep the distinct value, so we start from 1, 
 	// and check the current value and previous value 
 	for(var i=1; i<nums.length; i++){
 		if(nums[i]!==nums[i-1]){
 			nums[idx++] = nums[i]; 
 		}
 	}
 	if(idx<nums.length){
 		nums.splice(idx, nums.length-idx+1);
 	}
 	return idx;
 }; // 176ms majority passed 

 var input = [1,2,2,3,4,5,5,6,6,6,7,8];
 console.log(removeDuplicates(input));