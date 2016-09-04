/* /\/\/\/\/\/\ 
	1.8 Assume you have a method isSubstring which checks if one word is substring of another, Given two strings, 
	s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring()
*/

	
// the trick here is s1+s1 could have all the rotation of a string, just like a circle 
/*
	@param {string} s1
	@param {string} s2
	@return {boolean} 
*/
var isrotate = function(s1, s2){
	// combine the array in original order
	var comb = s1 + s1;
	return isSubstring(comb, s2);
};

function isSubstring(long, short){
	var slen = short.length;
	for(var i=0; i<long.length-slen; i++){
		if(long.substring(i, i+slen)===short) return true;
	}
	return false;
}

var in1 = 'palep', in2 = 'apple';

// console.log(isSubstring(in2, in1));
console.log(isrotate(in1,in2));
