/*
	@param {string} num1
	@param {string} num2
	@return {string}
*/

var multiply = function(num1, num2){
	// array for storing temporary result 
	// maximum should not larger than the sum of the length of the two string 
	var res = Array.apply(null, Array(num1.length+num2.length)).map(function(){return 0;}),
		one = num1.split(''),
		two = num2.split('');
	
	for(var i=one.length-1; i>=0; i--){
		var tmp = one[i];
		for(var j=two.length-1; j>=0; j--){
			var product = parseInt(tmp,10)*parseInt(two[j],10);
			// mapping of index 
			res[i+j]+= Math.floor((res[i+j+1]+product)/10);
			res[i+j+1] = Math.floor(res[i+j+1]+product)%10; 
		}
	}
	// remove the first element if it is zero 
	while(res[0]===0){
		res.shift();
	}
	return res.length===0? '0' : res.join('');
};

console.log(multiply('123', '34'));

