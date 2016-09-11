/*
	@param {number[]}
	@param {number}
	@return {number}
*/

// binary search 

var searchInsert = function(nums, target) {
	var low=0, high=nums.length-1;
	while(low<high){
		var mid = low + Math.floor((high-low)/2);
		if(nums[mid]<target){
			low = mid+1;
		}else if(nums[mid]>target){
			// if high is larger than mid, then it is possible that the high is the insertion place
			high = mid;
		}else{
			return mid;
		}
	}
	return nums[low]<target? low+1 : low;
};

var input = [1,2];
console.log(searchInsert(input, 0));
