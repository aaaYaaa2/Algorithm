/*
	Search for a range
*/

/*
	@param {number[]} nums
	@param {number} target
	@return {number[]}
*/

var searchRange = function(nums, target){
	if(nums===undefined || nums.length===0 || nums[0]>target || nums[nums.length-1]<target) return [-1, -1];
	var lo = 0, hi = nums.length-1, mid;
	while(lo<hi){
		mid = lo + Math.floor((hi-lo)/2);
		if(nums[mid]<target){
			// no need to deal with duplicates here it will not be faster 
			lo = mid+1;
		}else if(nums[mid]>target){
			hi = mid-1;
		}else{
			var front = mid, end = mid, tmp = nums[mid];
			while(front>=0 && nums[front]===tmp) front--;
			while(end<nums.length && nums[end]===tmp) end++;
			return [front+1, end-1];
		}
	}
	return (nums[lo]===target && nums[hi]===target)? [lo, hi] : [-1, -1];
};

var input = [2,2,3,4,4,7];
console.log(searchRange(input, 6));

