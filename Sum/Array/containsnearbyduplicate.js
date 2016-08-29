/**
 *	@param {number[]} nums
 *	@param {number} k
 *	@return {boolean}
 */

// Javascript realization of hashtable 
var containsNearbyDuplicate = function(nums, k){
	if(nums === undefined || nums.length===0 ) return false;
	var table = {};
	for(var i=0; i<nums.length; i++){
		if(table[nums[i]]!==undefined){
			if(i - table[nums[i]][0]<=k) return;
			table[nums[i]][0] = i;
			if(table[nums[i]][1]<=k) return true;
		}else{
			table[nums[i]] = [];
			table[nums[i]][0] = i;
			table[nums[i]][1] = 0;
		}
	}
	return false;
}; // 132ms

var containsNearbyDuplicate = function(nums, k) {
    if(nums === undefined || nums.length<=0 || k<1 ) return false;
	var table = {};
	for(var i=0; i<nums.length; i++){
	    // update map value each time encounter a duplicate 
	    // if the new duplicate index distance <= k we find the target and return true;
		if(table[nums[i]]!==undefined && (i - table[nums[i]])<=k && (i - table[nums[i]])!==0) return true;
		table[nums[i]] = i;
	}
	return false;
};// 116s 

var input = [1,0,1,1];
var k = 4;
console.log(containsNearbyDuplicate(input, 1));

var containsNearbyDuplicate1 = function(nums, k){
	if(nums===undefined || nums.length<=1 || k<1) return false;
	var map = {};
	for(var i=0; i<nums.length; i++){
		if(!map[nums[i]]){
			return true;
		}else{
			if(i-k >=0){
				map[nums[i-k]] = undefined;
			}
			map[nums[i]] = true;
		}
	}
	return false;
}