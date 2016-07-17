/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	if(s==='undefined' || s.length===0) return s;
	var chars = s.split('');
  	var volwels = 'aeiouAEIOU';
  	var start = 0, end = s.length-1; // two pointers
  	while(start<end){
  		while(start<end && volwels.indexOf(chars[start])<0){
  			start++;
  		}
  		while(start<end && volwels.indexOf(chars[end])<0){
  			end--;
  		}
  		var tmp = chars[start];
  		chars[start] = chars[end];
  		chars[end] = tmp;
  		start++;
  		end--;
  	}
  	return chars.join('');
};

console.log(reverseVowels('hello'));