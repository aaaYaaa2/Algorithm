/*
	@param {number[]} nums
	@param {number} target
	@return {number}
*/

var threeSumClosest = function(nums, target){
	var result = [], diff = Number.MAX_SAFE_INTEGER, closest=0;
	nums.sort(function(num1, num2){ return num1-num2;});

	for(var i=0; i<nums.length-2; i++){
		for(var j=i+1, end=nums.length-1; j<end; ){
			var sum = nums[i] + nums[j] + nums[end];
			if(sum === target){
				return sum;
			}else if(sum > target){
				if(sum-target<diff){
					diff = sum-target;
					closest = sum;
				}
				end--;
			}else{
				// sum < target case
				if(target-sum<diff){
					diff = target-sum;
					cloest = sum;
				}
				j++;
			}
		}
	}
	return closest;
};

var input = [-1,2,1,-4];
console.log(threeSumClosest(input, 1));