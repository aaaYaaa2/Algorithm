var combinationSum = function(candidates, target) {
    var fres = [];
    candidates.sort(function(a, b){ return a-b;});
    sumHelper(candidates, target, [], fres, 0);
    return fres;
};

function sumHelper(candidates, target, subres, res, start){
    if(target===0){
        res.push(subres.slice());
        return;
    }
    for(var i=start; i<candidates.length; i++){
        if(target>=candidates[i]) {
            // since the candidates may contain duplicates if not we can remove this line 
            if(i>0 && candidates[i-1]===candidates[i]) continue;
            subres.push(candidates[i]);
            // here we have i not i+1, since it allows reuse of same elements in the array 
            sumHelper(candidates, target-candidates[i], subres, res, i);
            subres.pop();
        }
    }   
}

var input = [2,2,5,6,3,9];
console.log(combinationSum(input, 10));