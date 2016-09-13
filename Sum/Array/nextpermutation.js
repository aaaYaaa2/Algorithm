/*
	@param {number[]} nums
	@param {void} Modified it in-place
*/
/*
	first find the first increasing place 
		if the place is at idx 0 then reverse the whole array 
	if not find the smallest element in the later of the idx that is larger than this element 

	swap the two element, reverse the later part then return the array 
*/
var nextPermutation = function(nums){
	for(var i=nums.length-1; i>=0; i--){
		if(i!==0 && nums[i-1]<nums[i]) break;
	}
	var replaceHead = i===0? 0 : i-1;
	// if this is the largest permutation, return the first permutation 
	if(replaceHead===0 && nums[0]>nums[1]) {
		reverseArray(0, nums.length-1, nums);
		return;
	}
	for(var j=nums.length-1; j>=replaceHead; j--){
		if(nums[j]>nums[replaceHead]) break;
	}
	swap(j, replaceHead, nums);
	reverseArray(j+1, nums.length-1, nums);
	return;
};

function reverseArray(start, end, nums){
	for(var i=start, j=end; i<j; i++, j--){
		swap(i, j, arr);
	}
}

function swap(idx1, idx2, arr){
	var tmp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = tmp;
}