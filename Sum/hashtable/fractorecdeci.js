/*
	@param {number} numerator
	@param {number} denominator
	@return {string}
*/

var fractionToDecimal = function(numerator, denominator){
	if(numerator==0) return '0';
	var res = '';
	// handle part before decimal point
	res+=Math.floor(numerator/denominator);
	res+='.';
	var num = numerator%denominator, map={};
	// part after decimal point 
	map[num] = res.length;
	while(num!==0){
		num = num*10;
		res+=Math.floor(num/denominator);
		num = num%denominator;
		if(map[num]!==undefined){
			res = res.split(''); // not transform the original res into an array, it is split res into a new array
			res.splice(map[num], 0, '('); // modified original array 
			res.push(')');
			res = res.join('');// return a new arrat 
			break;
		}else{
			map[num] = res.length;
		}
	}
	return res;
};

console.log(fractionToDecimal(4,3));