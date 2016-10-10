/*
	@param {number[]} nums
	@return {number}
*/
/*
	method 1, use hashtable, number in nums as key and a stack as value, keep a global value to keep record of length 
	1. iterate through nums, 
	2. for each element in nums, compare to the top element on stack, if the peek smaller than stack, push the current 
	number to stack, if the peek is larger than stack, then pop the stack until we get a samller one, 
	3. update the global value at each number in step 2. 
	4. the time complexity would be O(N*N*k)
	5. when encounter duplicates, we need to skip the duplicate key
*/
var lengthOfLIS1 = function(nums) {
	var table = {}, max=Number.MAX_MIN_INTEGER;
	for(var i=0; i<nums.length; i++){
		// only consider non-duplicate value since the longer one will always start from the one appear earier 
		if(table[nums[i]]===undefined){
			for(var key in table){
				if(key<nums[i]){
					var tmp = table[key][table[key].length-1];
					if(tmp<nums[i]){
						table[key].push(nums[i]);
						max = Math.max(max, table[key].length);
					}
					if(tmp>nums[i]){
						while(table[key][table[key].length-1]>nums[i]) table[key].pop();
						table[key].push(nums[i]);
						max = Math.max(max, table[key].length);
					}
				}
			}
		}
	}
	return max;
};

/*
	method 2 : start from the back 
	1. iterate through the arr from the back, use a global arr to keep record of the current max length sofar 
	2. for each iteration, 
		find the number after it that which is larger than it, take the max of the length 
	3. repeat until reach index 0
	4. iterate through the arr and pick the max value 
	5. Time Complexity is O(n*n);
*/

var lengthOfLIS2 = function(nums) {
	if(nums===undefined || nums.length===0) return 0;
	var lenArr = Array.apply(null, Array).map(function(){return 1;}), maxRes = 1;
	for(var i=nums.length-1; i>=0; i--){
		var cur = nums[i];
		var tmpMax = 1;
		for(var j=nums.length-1; j>i; j--){
			if(nums[j]>cur){
				tmpMax = Math.max(tmpMax, lenArr[j]+1);
			}
		}
		lenArr[i] = tmpMax;
	}
	// iterate through the array and choose the max one
	for(var k=0; k<lenArr.length; k++) maxRes = Math.max(maxRes, lenArr[k]);
	return maxRes;
};

var input = [2,3,1,1,2,3,6];
// console.log(lengthOfLIS2(input));

/*
	to optimize it more, when we search for the number behind the array, we can skip the number that is larger than the current minimum encountered 
*/
// another tail solution 
// see a good explaination here: https://discuss.leetcode.com/topic/28738/java-python-binary-search-o-nlogn-time-with-explanation/8
// the time complexity is O(NlgN) 
var lengthOfLIS3 = function(nums) {
	if(nums===undefined || nums.length===0) return 0;
	var record = [];
	for(var i=0; i<nums.length; i++){
		// be careful the j here should be record.length, not record.length-1;
		var j = record.length, k=0;
		while (k!==j){
			var mid = k + Math.floor((j-k)/2);
			if(record[mid]>=nums[i]){
				j = mid;
			}else{
				k = mid+1;
			}
		}
		record[k] = nums[i];
	}
	return record.length; 
};

var input2 = [2,3,1,1,2,3,6];
console.log(lengthOfLIS3(input2));

