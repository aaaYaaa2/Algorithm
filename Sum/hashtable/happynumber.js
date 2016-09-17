/*
	@param {number} b
	@return {boolean}
*/

var isHappy = function(n) {
	var set = {}, result = true;
	while(n!==1){
		var tmp = 0;
		while(n!==0){
			tmp+=Math.pow(n%10, 2);
			n=Math.floor(n/10);
		}
		if(set[tmp]!==undefined) return false;
		set[tmp] = true;
		n = tmp;
	}
	return true;
};

var input = 23;
console.log(isHappy(input));