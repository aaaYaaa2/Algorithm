/*
	1.6
	Compress the string, if the compressed result is longer than original, return the original 
	count as compress factor 

	the string only contain upper and lower case letters from a to z 
*/

/*
	@param {String} s
	@return {String} 
*/
var compressStr = function(s) {
	var res = [];
	res.push(s.charAt(0));
	for(var i=1; i<s.length; i++){
		var ct = 1;
		while(i<s.length && s.charAt(i)===s.charAt(i-1)) {
			ct++;
			i++;
		}
		res.push(ct);
		if(i<s.length) res.push(s.charAt(i));
	}
	return res.length>s.length? s : res.join('');
};

var input = 'bb';
console.log(compressStr(input));
