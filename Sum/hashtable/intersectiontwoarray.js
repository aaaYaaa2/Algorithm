/*
	@param {number[]} nums1
	@param {number[]} nums2
	@return {number[]} 
*/

var intersection = function(nums1, nums2) {
	var set = {}, result = [];
	// put the first number
	for(var i=0; i<nums1.length; i++){
		set[nums1[i]] = 1;
	}
	for(var j=0; j<nums2.length; j++){
		if(set[nums2[j]]!==undefined && set[nums2[j]]!==0) set[nums2[j]]--; 
	}
	for(var keys in set){
		if(set[keys]===0) result.push(parseInt(keys,10));
	}
	return result;
};

var input1 = [2,3,4,6,6,7], input2 = [3,3,5,6,6,7,8];
console.log(intersection(input1, input2));