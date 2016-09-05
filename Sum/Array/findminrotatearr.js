/*
	@param {number[]} nums
	@return {number}
*/

var findMin1 = function(nums) {
	var start=0, end=nums.length-1;
	if(nums[0]<nums[nums.length-1]) return nums[0];
	while(start<=end){
		var mid = start + Math.floor((end-start)/2);
		if(nums[mid]<nums[start]){
			if(nums[mid-1]>nums[mid]) return mid;
			end = mid-1;
		}else{
			if(nums[mid+1]<nums[mid]) return mid+1;
			start = mid+1;
		}
	}
	return end;
};

var input = [0,1,2,3,4];
console.log(findMin1(input));