/*
	@param {number[]} nums
	@param {number} target
	@return {number[]} 
*/

// use binary search 
var searchRange = function(nums, target) {
	var result = [-1,-1];
	if(nums===undefined || nums.length===0) return result;
	var low = 0, high = nums.length-1;
	while(low<=high){
		var mid = low + Math.floor((high-low)/2);
		if(nums[mid]<target){
			low = mid+1;
		}else if(nums[mid]>target){
			high = mid-1;
		}else{
			// nums[mid] = target
			var front=mid, end=mid;
			// check the boundary 
			while(front>=0 && nums[front]===target) front--;
			while(end<nums.length && nums[end]===target) end++;
			return [++front, --end];
		}
	}
	return result;
}; // 112 ms


var input = [3,3,4,5,6,7,7,7,7,8];
var input1 = [3];
var input2 = [3,3];
console.log(searchRange(input2, 4));