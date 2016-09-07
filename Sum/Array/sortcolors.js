/*
	@param {number[]} nums
	@return {void}
*/

var sortColor = function(nums) {
	if(nums===undefined || nums.length===0) return;
	var i=0, zero=0, two=nums.length-1, temp=0;
	for(var k=0; k<two;){
		if(nums[k]===0){
			temp = nums[zero];
			nums[zero++] = 0;
			nums[k] = temp;
			k++;
		}else if(nums[k]===2) {
			temp = nums[two];
			nums[two--] = 2;
			nums[k] = temp;
		}else{
			k++;
		}
	}
	return nums;
};

var input = [1,0];
console.log(sortColor(input));