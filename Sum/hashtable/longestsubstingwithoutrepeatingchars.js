/*
	@param {string} s
	@return {number}
*/

var lengthOfLongestSubstring = function(s) {
	if(s===undefined || s.length===0) return 0;
	var res = 0, startPoint = 0, cur = s.substring(0,1);
	for(var i=1; i<s.length; i++){
		if(cur.indexOf(s.charAt(i))!==-1){
			res = Math.max(res, i-startPoint);
			// start from the character that is right next to the previous repeat element
			startPoint+=cur.indexOf(s.charAt(i))+1;
		}
		cur = s.substring(startPoint, i+1); 
	}
	res = Math.max(res, s.length-startPoint);
	return res;
};

console.log(lengthOfLongestSubstring("pwwdskew"));