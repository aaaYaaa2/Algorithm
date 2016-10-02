/*
	@param {string} s
	@param {string}
*/
var maxLen = 0, lo = 0;

var longestPalindrome = function(s) {
	if(s.length<2) return s; 
	// if s.length-i is smaller than current half of max length, then it is not possible to have a longer result 
	for(var i=0; i<s.length-1 && (s.length-i)>maxLen/2; i++){
		// odd case 
		checkPalin(s, i, i);
		// even case
		checkPalin(s, i, i+1);
	}
	return s.substr(lo, maxLen);
};

function checkPalin(str, middle1, middle2){
	while(middle1>=0 && middle2<str.length && str.charAt(middle1)===str.charAt(middle2)){
		middle1--;
		middle2++;
	}
	if(middle2-middle1-1 > maxLen){
		lo = middle1+1;
		maxLen = middle2 - middle1 - 1;
	}
}

var input = 'abb';
console.log(longestPalindrome(input));