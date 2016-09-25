/*
	@param {number} n
	@return {number}
*/

var integerBreak = function(n) {
	if(n==2) return 1;
	if(n==3) return 2;
	var prod = 1;
	while(n>4){
		prod*=3;
		n-=3;
	}
	return prod*n;
};