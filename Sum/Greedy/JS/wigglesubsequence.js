/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums===undefined) return 0;
    if(nums.length<2) return nums.length;
    // obtain the difference array
    var i=1;
    while(i<nums.length && nums[i] == nums[i-1]) i++;
    if(i == nums.length) return 1;
    var maxLen = 2;
    for(var j=nums.length-1; j>0; j--){
        nums[j] = nums[j] - nums[j-1];
    }
    var increase = nums[i]>0? true : false;
    for(var k=i+1; k<nums.length; k++){
        if(increase){
            if(nums[k]<0) {
                increase = !increase;
                maxLen++;
            }
        }else{
            if(nums[k]>0){
                increase = !increase;
                maxLen++;
            }
        }
    }
    return maxLen;
};