/**
 *	@param {number[]} nums
 *	@return {number}
 */

// thought one, keep a global largest and global sum while add number together 
 var missingNumber = function(nums){
 	var sum = 0;
 	for(var i=0; i<nums.length; i++){
 		sum+=nums[i];
 	}
 	// the condition maybe that the max value is the missing one 
 	return ((1+nums.length)*(nums.length)/2 - sum);
 }; // linear time complexity 

 var input = [0,1,2,4];
 console.log(missingNumber(input));

 // another method is to use bit manipulation 
 

