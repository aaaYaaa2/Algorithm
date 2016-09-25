/*
	@param {number} n
	@param {number} k
	@return {string}
*/

var getPermutation = function(n, k){
	var factorMap = {}, res='', factorArr=[];
	// set 0 to 1, this is true in math, and also avoid factorMap to be zero
	if(n<=1) return ''+n; 
	factorMap['0'] = 1;
	factorMap['1'] = 1;
	// build the factor map
	for(var i=2; i<=n; i++){
		factorMap[i] = factorMap[i-1]*i;
	}
	// since k include the current 123456789, and we start at n-m, 
	k--;
	for(var j=1; j<=n; j++) factorArr.push(j);
	for(var m=1; m<=n; m++){
		var curFac = Math.floor(k/factorMap[n-m]);
		res+=factorArr[curFac];
		// remove the element that has been appended already 
		factorArr.splice(curFac, 1);
		// console.log(factorArr);
		k-=curFac*factorMap[n-m];
		// console.log(res);
	}
	return res;
};

console.log(getPermutation(9, 1));

