/**
 * @param {number[]} digits
 * @return {number[]} 
 */

 var plusOne = function(digits) {
 	var len = digits.length;
 	// if(digits[len-1]===10){
 	// 	while(len>0){
 	// 		// console.log('here');
 	// 		if(digits[len]<10){
 	// 			break;
 	// 		}else{
 	// 			digits[len]%=10;
 	// 			if(len-1>=0){
 	// 				digits[len-1]++;
 	// 			}
 	// 			len--;
 	// 		}
 	// 	}
 	// 	if(digits[0]===10){
 	// 		//console.log('here');
 	// 		digits[0]%=10;
 	// 		digits.unshift(1);
 	// 	}
 	// }
 	// return digits;

 	// it should have better logic organized 
 	for(var i=len-1; i>=0; i--){
 		if(++digits[i]<=9) return digits;
 		digits[i] = 0;
 	}
 	digits.unshift(1);
 	return digits;
 };

 var input = [8,9,9];

 console.log(plusOne(input));