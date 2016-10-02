/*
	@param {string} digits
	@return {string[]} 
*/

var letterCombinations = function(digits){
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
console.log(letterCombinations(input));