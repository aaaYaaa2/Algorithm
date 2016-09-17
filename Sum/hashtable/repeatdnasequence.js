/*
	@param {string} s
	@return {string[]} 
*/

// use hashtable 
var findRepeatDnaSequence = function(s){
	var table = {}, res = [];
	for(var i=0; i<=s.length-10; i++){
		var tmp = s.substring(i, i+10);
		if(table[tmp]===undefined){
			table[tmp] = true;
			// represents that this substring has been processed already 
		}else if(table[tmp]!==undefined && table[tmp]){
			res.push(tmp);
			table[tmp] = false;
		}
	}
	return res;
};

var input = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
console.log(findRepeatDnaSequence(input));