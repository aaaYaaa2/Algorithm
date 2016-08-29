/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead. 
 */

var moveZeroes = function(nums){
	if(nums === undefined || nums.length === 0) return nums;
	var idx=0;
	// if you use a for loop then i is alwasys increasing. 
	for(var i=0; i<nums.length;i++){
		if(nums[i]!==0){
			nums[idx] = nums[i];
			idx++;
		}
	}
	if(idx<nums.length){
		for(;idx<nums.length; idx++){
			nums[idx] = 0;
		}
	}
	return nums;
}// 96ms

// another method use splice and push 

var moveZeroes2 = function(nums){
	if(nums === undefined || nums.length === 0) return nums;
	for(var i=nums.length; i--;){
		if(nums[i]===0){
			nums.splice(i,1);
			nums.push(0);
		}
	}
}// 148 slower than previous 

var input = [];
var res = moveZeroes(input);
console.log(res);