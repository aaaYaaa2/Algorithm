/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// recursive solution 
var subsetsWithDup = function(nums) {
    var fres=[], flags=[];
    flag = Array.apply(null, Array(nums.length)).map(function(){ return false;});
    subsetHelper(nums, [], fres, flag, 0);
    return fres;
};

function subsetHelper(nums, subres, res, flags, start){
    res.add(subres.slice());
    
    for(var i=start; i<nums.length; i++){
        if(i>0 && nums[i-1]===nums[i] && !flags[i-1]) continue;
            subres.push(nums[i]);
            flag[i] = true;
            subsetHelper(nums, subres, res, flag, i+1);
            subres.pop();
            flag[i] = false; 
    }
}

// iterative solution 

var subsetsWithDup = function(nums) {
    var fres = [], begin=0;
    fres.push([]);
    nums.sort(function(a, b){ return a-b;});
    for(var i=0; i<nums.length; i++){
        var temp = fres;
        var tempSize = fres.length;
        if(i===0 || nums[i-1]!==nums[i]) begin = 0;
        for(var j=begin; j<tempSize; j++){
            // since temp[j] is always changing so if you just give cur = temp[j] it will change as temp[i] change 
            var cur = temp[j].slice();
            cur.push(nums[i]);
            fres.push(cur);
        }
        // console.log(fres);
        begin = tempSize;
    }
    return fres;
};

var input = [1,2,2];
console.log(subsetsWithDup(input));