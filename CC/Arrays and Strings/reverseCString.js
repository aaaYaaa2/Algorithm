// 08/30/16
/*
	Write code to reverse a C-Style String. 
	(C-String means that "abcd" is represented as five characters, including the null character at the end of the string .)
*/

var reverseCString = function(s) {
	// if s is an empty string 
	if(!s) return s;
	// get the length of empty string 
	s = s.split('');
	var len = s.length;
	// console.log(len);
	/* first method for the loop 
	for(var i=0; i<len; i++){
		swap1(i, --len, s);
	}
	*/
	// the index trick here 
	for(var i=0; i<Math.floor(len/2); i++){
		swap1(i, len-i-1, s);
	}
	return s;
};

function swap1(idx1, idx2, s) {
	var tmp = s[idx1];
	s[idx1] = s[idx2];
	s[idx2] = tmp;
}

function swap2(char1, char2) {
	char1 = char1^char2;
	char2 = char1^char2;
	char1 = char1^char2;
}

var input = ' u n ';
var res = reverseCString(input);
console.log(res);

