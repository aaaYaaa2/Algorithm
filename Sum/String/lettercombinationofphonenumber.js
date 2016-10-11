/*
	@param {string} digits
	@return {string[]} 
*/

var letterCombinations1 = function(digits){
	var queue = [], 
		map = {
				'0': ' ',
				'1': '*',
				'2': 'abc',
				'3': 'def',
				'4': 'ghi',
				'5': 'jkl',
				'6': 'mno',
				'7': 'pqrs',
				'8': 'tuv',
				'9': 'wxyz'
			  };
// initialize the queue first 
// Remeber empty string is undefined in javascript, then we need to make sure the empty string '' is not in the queue 
	var firstDig = digits.charAt(0);
	for(var j=0; j<map[firstDig].length; j++) {
		queue.push(map[firstDig].charAt(j));
	}

	for(var k=1; k<digits.length; k++){
		var alphabetSet = map[digits.charAt(k)];
		while(queue[0].length===k){
			var curStr = queue.shift();
			for(var j=0; j<alphabetSet.length; j++){
				queue.push(curStr+alphabetSet.charAt(j));
			}
		}
	}
	return queue;
};

var input = '123';
console.log(letterCombinations1(input));


/**
 * @param {string} digits
 * @return {string[]}
 */
 // recursive solution 
var letterCombinations2 = function(digits) {
    var mapping = ['', '*', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var res = [];
    if(digits===undefined || digits.length===0) return res;
    combinationHelper('', res, 0, mapping, digits);
    return res;
};

function combinationHelper(curStr, finalRes, curPlc, mapping, digits){
    if(curPlc===digits.length){
        // curPlc represent the current character so we need to use digits.length, not digits.length-1 
        finalRes.push(curStr);
        return;
    }
    var charPool = mapping[parseInt(digits.charAt(curPlc), 10)];
    // the for loop target on each position of a possible result 
    for(var i=0; i<charPool.length; i++){
        combinationHelper(curStr+charPool.charAt(i), finalRes, curPlc+1, mapping, digits);
    }
}