/*
	@param {String} pattern
	@param {String} str
*/

var wordPattern = function(pattern, str){
	var patternRecord = Array.apply(null, Array(26)).map(function(){return false;}),
		words = str.split(" "),
		table = {};
		// if the pattern and words has different length, then return false;
		if(pattern.length!==words.length) return false;
	// traverse
	for(var i=0; i<words.length; i++){
		if(table[words[i]]===undefined){
			if(patternRecord[pattern.charCodeAt(i)-'a'.charCodeAt(0)]){
				// if the character has appeared in the pattern before
				return false;
			}else{
				// a new word appear 
				table[words[i]] = pattern.charAt(i);
				patternRecord[pattern.charCodeAt(i)-'a'.charCodeAt(0)]=true;
			}
		}else{
			// the word appeared before
			var tmpChar = table[words[i]];
			if(tmpChar!==pattern.charAt(i)) return false;
		}
	}
	return true;
};

var pattern = "abba", str = "dog dog dog dog";
console.log(wordPattern(pattern, str));


