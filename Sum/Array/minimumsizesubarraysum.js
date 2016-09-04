/*
	Leetcode Minimum Size Subarray Sum
	@param s, the subsum 
	@param nums, the array  
*/
// keep a slide window 
var minimumSizeSubarraySum1 = function(s, nums){
	if(nums===undefined || nums.length===0) return 0;
	var i=0, j=0, min = Number.MAX_SAFE_INTEGER, sum=0;
	while(j<nums.length){
		sum+=nums[j++];
		while(sum>=s){
			sum-=nums[i++];
			min = Math.min(min, j-i+1);
		}
	}
	return min === Number.MAX_SAFE_INTEGER? 0: min;
}; // Time Complexity is O(N)

var input = [2,3,4,5,6,8,9];
console.log(minimumSizeSubarraySum1(13, input));

// use binary search, binary search the cumulative sum of original array 
var minimumSizeSubarraySum2 = function(s, nums) {
	if(nums===undefined || nums.length===0) return 0;
	var i=0, j=0, min = Number.MAX_SAFE_VALUE, sum=0, sums=[];
	sums[0] = 0;
	for(var i=1; i<nums.length; i++) sums[i] = sums[i-1] + nums[i-1];
	for(i=0; i<nums.length; i++) {
		var end = binarysearch(i, nums.length-1, nums[i]+s, sums);
		if (end===nums.length-1) break;
		min = end-i<min ? end-i : min;
	}
	return min;
};

function binarysearch (start, end, target, sums){
	while(start<=end){
		var mid = start + Math.floor((end-start)/2);
		if(sums[mid]>=target){
			end = mid-1;
		}else{
			start = mid+1;
		}
	}
	return start;
}
