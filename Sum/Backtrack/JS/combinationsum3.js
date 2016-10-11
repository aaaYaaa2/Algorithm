/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var fres = [];
    sumHelper(k, n, [], fres, 1);
    return fres;
};

function sumHelper(k, target, subres, res, start){
    if(target===0){
        if(subres.length===k) res.push(subres.slice());
        return;
    }
    for(var i=start; i<=9; i++){
        subres.push(i);
        sumHelper(k, target-i, subres, res, i+1);
        subres.pop();
    }
}