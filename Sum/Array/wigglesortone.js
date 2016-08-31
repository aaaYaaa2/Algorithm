/**
 *	@param nums a list of integer
 *	@return void 
 */
// method one, sort the array in ascending order, then 3 elements as a group, swap the last two elements of each group 

 var wigglesort = function( nums ){
 	// sort array in ascending order
 	nums.sort(function(num1, num2){
 		return num1 - num2;
 	});
 	// swap 
 	var first=1, second=2;
 	while(second<nums.length){
 		var tmp = nums[second];
 		nums[second] = nums[first];
 		nums[first] = tmp;
 		second+=2;
 		first+=2;
 	}
 	return nums;
 }

 var input = [5,5,1,34,12,3,2,7,10];
 console.log(wigglesort(input));

 // another solution without sort first 
 /*
 	two conditions: 
 	1) if the index is odd, nums[i] >= nums[i-1]
 	2) if the index is even, nums[i] <= nums[i-1]
 	so we reorder the array to satify these condition 
 */

 var wigglesortQuic = function(nums){
 	for(var i=1; i<nums.length; i++){
 		if(((i%2===1) && (nums[i]<nums[i-1])) || ((i%2===0) && (nums[i]>nums[i-1]))) swap(i, i-1, nums);
 	}
 	return nums;
 }

 function swap (idx1, idx2, arr) {
 	var tmp = arr[idx1];
 	arr[idx1] = arr[idx2];
 	arr[idx2] = tmp;
 }

 console.log(wigglesortQuic(input));