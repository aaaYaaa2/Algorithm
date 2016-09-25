/*
	@param {number} n
	@return {number}
*/

var nthUglyNumber = function(n){
	var t2=0, t3=0, t5=0;
	var factor1 = 2, factor = 3, factor = 5;
	var ugly = [];
	for(var i=0; i<n; i++){
		ugly[i] = Math.min(Math.min(factor1, factor2), factor3);
		var min = ugly[i];
		if(min===factor1) factor1 = ugly[++t2]*2;
		if(min===factor2) factor2 = ugly[++t3]*3;
		if(min===factor3) factor3 = ugly[++t5]*5;
	}
	return ugly[n-1];
};