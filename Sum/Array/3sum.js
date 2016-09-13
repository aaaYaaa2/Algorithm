/*
	@param {number[]} nums
	@return {number[][]}
*/

var threeSum = function(nums) {
	var result = [];
	if(nums.length<3) return result;
	nums.sort(function(num1, num2){ return num1-num2;})
	for(var i=0; i<nums.length-2; i++){
		if(i!==0 && nums[i-1]===nums[i]) continue;
		for(var j=i+1; j<nums.length-1; j++){
			if(j!==i+1 && nums[j-1]===nums[j]) continue;
			for(var k=j+1; k<nums.length; k++){
				if(k!=j+1 && nums[k-1]===nums[k]) continue;
				var sum = nums[i] + nums[j] + nums[k];
				if(sum === 0){
					result.push([nums[i],nums[j],nums[k]].slice());
				}
			}
		}
	}
	return result;
};

var input = [0,0,0];
console.log(threeSum(input));