/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var fres = [], flags=[];
    flags = Array.apply(null, Array(candidates.length)).map(function(){ return false;});
    candidates.sort(function(a,b){return a-b;});
    sumHelper(candidates, target, [], fres, flags, 0);
    return fres;
};

function sumHelper(candidates, target, subres, res, flags, start){
    if(target===0){
        res.push(subres.slice());
        return;
    }
    for(var i=start; i<candidates.length; i++){
        if(candidates[i]<=target){
            if(i>0 && candidates[i-1]===candidates[i] && !flags[i-1]) continue;
            subres.push(candidates[i]);
            flags[i] = true;
            sumHelper(candidates, target-candidates[i], subres, res, flags, i+1);
            subres.pop();
            flags[i] = false;
        }
    }
}

