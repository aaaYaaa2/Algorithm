/**
 * @ param {string} s
 * @ return {number}
 */
// 06/31/2016
 var calculate = function(s){
 	s = s.trim();
 	var num = 0, len = s.length, stack = [], sign='+';
 	for(var i=0; i<len; i++){
 		if(!(isNaN(parseInt(s.charAt(i),10)))){ 
 			// Javascript treat empty string or character as 0, which will fail the isNaN test
 			// so if we want to check that have to transform it using parseInt first, 
 			// parseInt will not convert the empty string into number 
 			num = num*10 + parseInt(s.charAt(i),10);
 			console.log(num);
 		}// transform it into a real number 

 		if( isNaN(parseInt(s.charAt(i))) || i===(len-1)){
 			if(s.charAt(i)===' ') continue;
 			if(sign==='+'){
 				stack.push(num);
 			}else if(sign==='-'){
 				stack.push(-num);
 			}else if(sign==='*'){
 				stack.push(stack.pop()*num);
 			}else if(sign==='/'){
 				stack.push(stack.pop()/num);
 			}
 			sign = s.charAt(i);
 			num = 0;
 		}
 	}

 	var result = 0;
 	while(stack.length>0){
 		result+=stack.pop();
 	}
 	return result;
 };
 var a = "1 + 7";
 console.log(calculate(a));
 console.log(isNaN(' ')); 