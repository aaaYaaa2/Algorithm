/*
	Gray Code
	@param {number} n
	@return {number[]}
*/

var grayCode = function(n){
	var result = [];
	result.push(0);
	var size;
	for(var i=0; i<=n; i++){
		size = result.length;
		for(var j=size-1; j>=0; j--){
			result.push(result[j] | (1 << i));
		}
	}
	return result;
};



