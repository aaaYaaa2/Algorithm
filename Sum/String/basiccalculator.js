/*
	@param {string} s
	@return {number}
*/

var calculate = function(s){
	s = s.trim();
	var stack = [], negative = false, reg = /[0-9]/;
	// since integers are non-negative first number is always positive or zero 
	// stack.push(parseInt(s.charAt(i), 10));
	for(var i=0; i<s.length; ){
		console.log(negative);
		if( s.charAt(i)===' ' || s.charAt(i)==='+' ){
			i++;
		}else if( s.charAt(i)==='-'){
			negative = true;
			i++;
		}else if(s.charAt(i)==='*' || s.charAt(i)==='/'){
			var operator = s.charAt(i);
			var prev = stack.pop();
			console.log(prev);
			var thisNum = 0;
			i++;
			while(s.charAt(i)==' ') i++;
			while(i<s.length && (s.charAt(i)).match(reg)){
				thisNum*=10;
				thisNum+=parseInt(s.charAt(i), 10);
				i++;
			}
			console.log(prev/thisNum);
			var tmp = 0;
			if(operator ==='*') tmp = prev*thisNum;
			// be careful the integer divide in javascript 
			if(operator ==='/') tmp = prev/thisNum<0? Math.ceil(prev/thisNum) : Math.floor(prev/thisNum);
			stack.push(tmp);
		}else{
			// it is only number 
			var thisNum = 0;
			while(i<s.length && s.charAt(i).match(reg)){
				// console.log(i);
				thisNum*=10;
				thisNum+=parseInt(s.charAt(i), 10);
				i++;
			}
			if(negative){
				stack.push(-thisNum);
				negative = false;
			}else{
				stack.push(thisNum);
			}
		}
	}

	var finalRes = 0;
	while(stack.length>0){
		finalRes+=stack.pop();
	}
	return finalRes;
};

var input = '122';
console.log(calculate(input));

// for a better logic: https://leetcode.com/submissions/detail/65786452/