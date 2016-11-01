/*
	@param {string} s
	@return {string[][]} 
*/

var partition = function(s){
	var result = [];
    if(s.length === 0) return result;
    backtrackHelper(s, 0, [], result);
    return result;
};

function backtrackHelper(s, start, subres, res){
    if(start === s.length){
        res.push((''+subres).split(','));
        return;
    }
    
    for(var i=start; i<s.length; i++){
    	var tmp = s.substring(start, i+1);
        if(isPalindrom(tmp)){
            subres.push(tmp);
            backtrackHelper(s, i+1, subres, res);
            subres.pop();
        }
    }
}

function isPalindrom(str){
    var end = str.length-1;
    for(var i=0; i<end; i++){
        if(str.charAt(i)!==str.charAt(end)) return false;
        end--;
    }
    return true;
}

// console.log(partition('aaaaa'));

// iterative solution, Use Dynamic programming 

/*
	result[i] stores all the possible partition until index i
	aplinPair[i][j] is true if string from i to j is a palindrome 

*/
var partition2 = function(s){
	var result = [], palinPair = [];

	for(var row=0; row<s.length; row++){
		palinPair[row] = [];
		console.log(palinPair[row]);
		for(var col=0; col<s.length; col++){
			palinPair[row][col]=false;
		}
	}
	result[0] = [];
	for(var i=0; i<s.length; i++){
		result[i+1] = [];
		for(var left=0; left<=i; left++){
			if(s.charAt(i) === s.charAt(left) && (i-left<=1 || palinPair[left+1][i-1])){
				palinPair[left][i] = true; 
				var tmp = s.substring(left, i+1);
				(result[left]).forEach(function(entry){
					// console.log(entry);
					result[i+1].push(new Array(entry.push(tmp)));	
				}); 
			}
		}
	}
	return result.pop();
};

console.log(partition2('abb'));
