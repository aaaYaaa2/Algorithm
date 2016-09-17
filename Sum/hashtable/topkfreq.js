/*
	@param {number[]} nums
	@param {number} k
	@return {number[]}
*/

var topKFrequent = function(nums, k) {
	var table = {}, result = [];
	// put elements in hashtable 
	for(var i=0; i<nums.length; i++){
		if(table[nums[i]]!==undefined){
			table[nums[i]]++;
		}else{
			table[nums[i]] = 1;
		}
	}
	// since we don't have 0 count here, so we need to make the length to nums.length+1 
	// and for the same reason the last loop should be starting from nums.lenght, not nums.length-1
	var bucket = Array.apply(null, Array(nums.length+1)).map(function(){ return []; });

	for(var key in table){
		//console.log(bucket[table[key]]);
		bucket[table[key]].push(parseInt(key));
	}
/**
	for(var ct=nums.length-1; ct>=0 && result.length<k; ct--){
		if(bucket[ct]!==false) bucket[ct].forEach(
			function(val, index, arr){
				result.push(val);
			});
	}
*/	
	for(var ct=nums.length; ct>=0 && result.length<k; ct--){
		if(bucket[ct]!==false){
			for(var r=0; r<bucket[ct].length; r++){
				result.push(bucket[ct][r]);
			}
		}
	}
	return result;
};

var input = [1];
console.log(topKFrequent(input,1));

