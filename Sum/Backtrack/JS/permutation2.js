/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums===undefined || nums.length===0) return [[]];
    var flags = [], fres=[];
    for(var i=0; i<nums.length; i++) flags[i] = false;
    nums = nums.sort(function(a, b){ return a-b;});
    permuteHelper(nums, [], fres, flags);
    return fres;
};

function permuteHelper(nums, subres, res, flags){
    if(subres.length===nums.length) {
        res.push(subres.slice());
        return;
    }
    
    for(var i=0; i<nums.length; i++){
        if(i>0 && nums[i]===nums[i-1] && !flags[i-1]) continue;
        if(!flags[i]){
            subres.push(nums[i]);
            flags[i] = true;
            permuteHelper(nums, subres, res, flags);
            subres.pop();
            flags[i] = false;
        }
    }
}