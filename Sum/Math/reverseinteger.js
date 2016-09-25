/*
	Reverse Integer
	@param {number} x
	@return {number}
*/

var reverse = function(x) {
	var negative = x<0? true : false;
	if(negative) x = -1*x;
	var res = 0;
	while(x!==0){
		res = res*10 + x%10;
		x = Math.floor(x/10);
	}
	return res>Number.MAX_SAFE_INTEGER? 0 : (negative? (-1*res) : res);
};
console.log(Number.MAX_SAFE_INTEGER);
console.log(reverse(1534236469));