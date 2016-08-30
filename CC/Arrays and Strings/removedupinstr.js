/*
	Design an algorithm and write code to remove the duplicate characters in a string without using any additional 
	buffer. 
	NOTE: One or two additional variables are fine, An extra copy of the array is not 
	Write the test case for this method. 
*/

/*
	the question has been seen several times
*/

// if we need to keep the original relative position of the array, then we cannot sort it then 
// so keep two index, and scan the previous, as we iterate through the array. 
// if we find duplicate we keep iterate, if we did not find the duplicate, we set the slow mover place
// to the duplicate number 
/*
	@param {String} 
	@return {String[]} modified them inplace 
*/
var removeDup = function(s) {
	if(s.length<=1) return s;
	// convert them into characters array 
	var strArr = s.split('');
	console.log(strArr);
	var idx=1;
	for(var i=1; i<strArr.length; i++){
		var j=i;
		while(j--){
			if(strArr[i]===strArr[j]) break;
		}
		// we find a distinct number 
		if(j===-1) strArr[idx++] = strArr[i];
	}
	strArr.splice(idx);
	return strArr.join('');
};
// The time complexity will be O(n^2); 
var input = 'asasas';
console.log(removeDup(input));