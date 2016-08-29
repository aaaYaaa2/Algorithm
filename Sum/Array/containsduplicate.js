/**
 *	@param {number[]} nums
 *	@return {boolean}
 */

 var containsDuplicate = function(nums){
 	if( nums===undefined || nums.length<=1 ) return false;
 	var set = {};
 	for(var i=0; i<nums.length; i++){
 		if(set[nums[i]]!==undefined){
 			return true;
 		}else{
 			set[nums[i]] = true;
 		}
 	}
 	return false;
 }// 128ms

 var containsDuplicate1 = function(nums){
 	var obj = {};
 	for(var i=0; i<nums.length; i++){
 		obj[nums[i]] = obj[nums[i]] + 1 || 1;
 		if(obj[nums[i]] > 1) return true;
 	}
 }

