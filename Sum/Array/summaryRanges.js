/*
	@param {number[]} nums
	@return {string[]}
*/

var summaryRange = function(nums) {
	var start=nums[0], arrow = '->', end=nums[0];
	var res = [];
	if(nums===undefined || nums.length===0) return res;
	for(var i=1; i<nums.length; i++){
		if(nums[i]!==nums[i-1]+1){
			// nums[i] is a start of a new range
			if(start!==end){
				res.push('' + start + arrow + end);
			}else{
				res.push('' + start);
			}
			start=nums[i];
			end = nums[i];
		}else{
			// nums[i] is in still in this range 
			end = nums[i];
		}
	}
	// don't forget the last part 
	if(start===end) {
		res.push('' + start);
	}else{
		res.push('' + start + arrow + end);
	}
	return res;
};

var input = [];
console.log(summaryRange(input));
