/*
	@param {number[]} nums
	@return {number[][]}
*/

var permute = function(nums) {
	if(nums===undefined || nums.length===0) return [[]];
	var fres=[], flag=[];
		// the following method to create the array is very slow; 
	    // flag = Array.apply(null, Array(nums.length)).map(function(){ return false;});
	for(var i=0; i<nums.length; i++) flag[i] = false;
	permuteHelper(nums, [], fres, flag);
	return fres;
};

function permuteHelper (nums, subres, res,flag){
	if(subres.length===nums.length) {
		res.push(subres.slice());
		return;
    }
	
	for(var i=0; i<nums.length; i++){
		if(!flag[i]) {
            subres.push(nums[i]);
            flag[i] = true;
            permuteHelper(nums, subres, res, flag);
            subres.pop();
            flag[i] = false;
        }
    }
}

var input = [1,2,3,4];

console.log(permute(input));