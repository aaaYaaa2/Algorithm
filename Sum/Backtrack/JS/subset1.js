/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// recursion method 1
var subsets1 = function(nums) {
  var fres = [];
  for(var i=0; i<=nums.length; i++){
      subsetHelper(nums, i, [], fres, 0);
  }
  return fres;
};

function subsetHelper(nums, k, subres, res, start){
    if(k===0){
        res.push(subres.slice());
        return;
    }
    
    for(var i=start; i<nums.length; i++){
        subres.push(nums[i]);
        subsetHelper(nums, k-1, subres, res, i+1);
        subres.pop();
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// subset method 2

var subsets2 = function(nums) {
  var fres = [];
  subsetHelper(nums, [], fres, 0);
  return fres;
};

function subsetHelper2(nums, subres, res, start){
    res.push(subres.slice());
    
    for(var i=start; i<nums.length; i++){
        subres.push(nums[i]);
        subsetHelper(nums, k-1, subres, res, i+1);
        subres.pop();
    }
}

/*
    iterative solution 
*/

var subsets3 = function(nums) {
    var fres = [];
    fres.push([]);
    for(var i=0; i<nums.length; i++){
        var curNum = nums[i];
        var tempHolder = [];
        for(var j=0; j<fres.length; j++){
            var tmpLst = fres[j].slice();
            tmpLst.push(curNum);
            tempHolder.push(tmpLst);
        }
        for(var c=0; c<tempHolder.length; c++) fres.push(tempHolder[c]);
    }
    return fres;
};
var input = [1,2,3];
console.log(subsets3(input));