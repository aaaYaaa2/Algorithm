/*
	@param {Number} N
	@param {Number} M
	@param {Number} i
	@param {Number} j
	@return {Number} 
*/

var insertion = function(N, M, i, j){
	// clear bits between i and j 
	// create a mask like 111100011
	// create left part of mask
	var mask = 0;
	if(j < 31){
		var left = ~ 0; // all 1s 
		left = (left << (j+1)); // something like 11100000
		var right = (1 << i) - 1; // something like 00000011
		mask = (left | right);
	}else{
		mask = (1 << i) - 1;
	}
	// clearn N 
	N = N & mask;
	M = M << i;
	return (N | M);
};