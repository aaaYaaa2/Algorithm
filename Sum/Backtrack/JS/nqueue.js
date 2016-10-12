/*
	NQueen problem 
*/

var solveNQueens = function(n) {
    var fres = [],
        colSet = Array.apply(null, Array(n)).map(function(){ return false;});
        diagRight = Array.apply(null, Array(2*n)).map(function(){ return false;}),
        diagLeft = Array.apply(null, Array(2*n)).map(function(){ return false;});
    nqHelper(0, colSet, [], [], [], fres);
    return fres;
};

function nqHelper(row, colset, diagRight, diagLeft, subres, res){
    if(row===colset.length){
        res.push(subres.slice());
    }else{
        for(var j=0; j<colset.length; j++){
            var rightSec = row-j+colset.length, leftSec = row+j; 
            var tmp = Array.apply(null, Array(colset.length)).map(function(){ return '.';});
            if(!colset[j] && !diagRight[rightSec] && !diagLeft[leftSec]) {
                tmp[j] = 'Q';
                if(subres.length-1>=row) {
                    subres[row] = tmp.join('');
                }else{
                    subres.push(tmp.join(''));
                }
                colset[j] = true; diagRight[rightSec] = true; diagLeft[leftSec] = true;
                nqHelper(row+1, colset, diagRight, diagLeft, subres, res);
                colset[j] = false; diagRight[rightSec] = false; diagLeft[leftSec] = false;
            }
       }
   }
}