/*
	@param {number[]} nums
	@return {number}
*/

/*
	method1: create a post-prev array, then check the plus and minus sign of each element's neigbour 
*/
var findPeakElement1 = function(nums) {
	if(nums.length===1) return 0;
	if(nums.length===2) return nums[0] > nums[1]? 0 : 1;

	// create the minus array 
	var minus = [];
	minus[0] = Number.MAX_SAFE_INTEGER;
	for(var i=1; i<nums.length; i++) {
		minus[i] = nums[i]-nums[i-1];
	}

	// search for our target result;
	if(minus[1]<0) return nums[0];
	for(i=1; i<nums.length-1; i++){
		if(minus[i]>0 && minus[i+1]<0) return i; 
	}
	if(minus[nums.length-1]>0) return nums.length-1;
}; // Time Complexity O(N) N is the length of nums 

//  var input = [1,2,3];
//  console.log(findPeakElement1(input));

/*
	method 2: use binary search in finding the element 
*/
var findPeakElement2 = function(nums) {
	if(nums.length===1) return 0;
	if(nums.length===2) return nums[0] > nums[1]? 0 : 1;

	// create the minus array 
	var minus = [];
	minus[0] = Number.MAX_SAFE_INTEGER;
	for(var i=1; i<nums.length; i++) {
		minus[i] = nums[i]-nums[i-1];
	}

	// use binary saerch 
	return binarySearch(0, minus.length-1, minus);
}; // 86ms

function binarySearch(curIdx, high, arr) {
	while(curIdx<=high){
		var mid = curIdx + Math.floor((high-curIdx)/2);
		if(arr[mid]>0 && mid===arr.length-1 || arr[mid]>0 && arr[mid+1]<0) {
			return mid;
		}else if(arr[mid]>0 && arr[mid+1]>0) {
			curIdx = mid+1;
		}else{
			// arr[mid] < 0
			high = mid-1;
		}
	}
	return high;
}

var input2 = [];
console.log(findPeakElement2(input2));