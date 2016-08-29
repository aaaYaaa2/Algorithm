/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} 
 */

// method one sort and use two pointers
// but if sort first, then you cannot get the right index  
 var twoSum1 = function(nums, target) {
 	var start=0, end=nums.length-1;
 	nums.sort(function(num1, num2){
 		return num1-num2;
 	});
 	console.log(nums);
 	while(start<end){
 		if(nums[start]+nums[end]<target){
 			start++;
 		}else if(nums[start]+nums[end]>target){
 			end--;
 		}else{
 			return [start, end];
 		}
 	}
 }; 

 // method two, to use hashmap 
 var twoSum2 = function(nums, target){
 	var map = {};
 	for(var i=0; i<nums.length; i++) {
 		if(map[target-nums[i]]!==undefined){
 			return [map[target-nums[i]], i];
 		}else{
 			map[nums[i]] = i;
 		}
 	}
 };

var input = [1,4,2,3,5,6,7,6];
console.log(twoSum2(input, 3));