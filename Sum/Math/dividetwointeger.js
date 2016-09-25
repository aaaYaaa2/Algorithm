/*
	@param {number} dividend
	@param {number} divisor
	@return {number} 
*/

var divide = function(dividend, divisor) {
	var result = divideHelper(dividend, divisor);
	if(result>Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
	if(result<Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
};

function divideHelper(dividend, divisor) {
	var negative = dividend<0 !== divisor<0;
	if(dividend<0) dividend = -dividend;
	if(divisor<0) divisor = -divisor;

	var res = 1;
	var tmpdivisor = divisor;
	while((tmpdivisor+tmpdivisor)<dividend){
		res+=res;
		tmpdivisor+=tmpdivisor;
	} 

	return negative? -(res + divideHelper(dividend-tmpdivisor, divisor)) : (res + divideHelper(dividend-tmpdivisor, divisor));
}