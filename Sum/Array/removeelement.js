/**
 *	@param {number[]} nums
 *	@param {number} val
 *  @return {number} 
 */

 // keep two pointers 
 var removeElement1 = function(nums, val) {
 	var slow=0, fast=0;
 	for(fast=0; fast<nums.length; fast++){
 		if(nums[fast]!==val){
 			nums[slow++]=nums[fast];
 		}
 	}
 	return slow;
 }// 140ms

// use splice, be careful with the index in this case 

var removeElement2 = function(nums,val) {
	for(var i=0; i<nums.length; i++){
		if(nums[i]===val){
			// delete this element 
			nums.splice(i,1);
			i--;
		}
	}
	return i;
}// this is even slower 

// another is regardless of order of original array 
var removeElement3 = function(nums, val) {
	var begin = 0, end = nums.length-1;
	while(begin <= end) {
		if(nums[begin] === val){
			nums[begin] = nums[end];
			end--;
		}else{
			begin++;
		}
	}
	return begin;
}

var input = [2,3,5,5,4,6,5,5,2];
console.log(removeElement2(input, 5));