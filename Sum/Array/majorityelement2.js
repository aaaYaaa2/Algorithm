/*
	@param {number[]} nums
	@return {number[]}
*/

var majorityElement = function(nums){
	var ct = [0,0], res1=0, res2=0;
	for(var i=0; i<nums.length; i++){
		if(res1===nums[i]){
			ct[0]++;
		}else if(res2===nums[i]){
			ct[1]++;
		}else if(ct[0]===0){
			ct[0]++;
			res1 = nums[i];
		}else if(ct[1]===0){
			ct[1]++;
			res2 = nums[i];
		}else{
			ct[0]--;
			ct[1]--;
		}
	}
	// check if the two elements are real majority
	ct[0]=0;
	ct[1]=0;
	console.log(res1);
	console.log(res2);
	for(i=0; i<nums.length; i++){
		if(nums[i]===res1) ct[0]++;
		if(nums[i]===res2) ct[1]++;
	}
	var fres = [];
	if(ct[0]>Math.floor(nums.length/3)) fres.push(res1);
	if(ct[1]>Math.floor(nums.length/3)) fres.push(res2);
	return fres;
};

var input = [4,2,1,1];
console.log(majorityElement(input));