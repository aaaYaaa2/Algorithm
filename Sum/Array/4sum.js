/*
	@param {number[]} nums
	@param {number} target
	@return {number[][]} 
*/

// recursive solution with backtrack helper
var fourSum = function(nums, target) {
	var result = [];
	if(nums.length<4) return result;
	// sort the array to let the duplicates stay together 
	nums.sort(function(num1, num2){ return num1-num2;});
	var record = Array.apply(null, Array(nums.length)).map(function(){return 0;});
	backtrack(nums, target, result, [], 0, record);
	return result;
};

function backtrack (nums, target, result, subres, start, record){
	if(target===0 && subres.length===4) {
		// note we need to copy the array by value 
		result.push(subres.slice());
		return;
	}
	if(subres.length>=4) return;
	for(var i=start; i<nums.length; i++){
		if(record[i]===1) continue;
		if(i>0 && nums[i-1]===nums[i] && record[i-1]===0){
			continue;
		}else{
			subres.push(nums[i]);
			record[i]=1;
			backtrack(nums, target-nums[i], result, subres, i+1, record);
			subres.pop(nums[i]);
			record[i]=0;
		}
	}
}// the time complexity is O(n^4); since we need to iterate through all possibilityies 

// iterative solution 
var fourSum1 = function(nums, target){
	var result = [];
	if(nums.length<4) return [];
	nums.sort(function(num1, num2){ return num1-num2;});
	for(var i=0; i<nums.length-3; i++){
		if(i!==0 && nums[i]===nums[i-1]) continue;
		for(var j=i+1; j<nums.length-2;j++ ){
			var lo = j+1, hi = nums.length-1;
			while(lo<hi){
				var sum = nums[i] + nums[j] + nums[lo] + nums[hi];
				if(sum===target){
					result.push([nums[i], nums[j], nums[lo], nums[hi]].slice());
					// skip the duplicates 
					while(lo<hi && nums[lo]===nums[lo+1]) lo++;
					while(lo<hi && nums[hi]===nums[hi-1]) hi--;
					lo++;
					hi--;
				}else if(sum<target){
					lo++;
				}else{
					hi--;
				}
			}
		}
	} 
	return result;
};

 var input = [1,0,-1,0,-2,2];
 console.log(fourSum1(input, 0));
