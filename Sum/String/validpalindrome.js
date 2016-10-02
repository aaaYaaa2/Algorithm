/*
	@param {string} s
	@return {boolean}
*/

var isPalindrome = function(s){
	s = s.trim();
	var regu = /[0-9a-zA-Z]/;
	// console.log(s.charAt(regu).match(regu));
	for(var i=0, j=s.length-1; i<j; ){
		if(!s.charAt(i).match(regu) || !s.charAt(j).match(regu)){
			if(!s.charAt(i).match(regu)) i++;
			if(!s.charAt(j).match(regu)) j--;
		}else{
			if(s.charAt(i).toLowerCase()===s.charAt(j).toLowerCase()){
				i++;
				j--;
			}else{
				return false;
			}
		}
	}
	return true;
};

var input = 'A man,    a plan, a ca  nal:   Pa na   ma';
console.log(isPalindrome(input));