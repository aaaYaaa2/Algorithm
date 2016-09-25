/*
	@param {number} x
	@param {number} n
	@return {number}
*/

var myPow = function(x, n){
	var powerNegative = false;
	if(n<0) {
		powerNegative = true;
		n = -n;
	}
	return powerNegative? 1/powerHelper(x, n) : powerHelper(x, n);
};

function powerHelper(base, power){
	// base case 
	if(power===0) return 1;
	var product = base, curPower = 1;
	while(curPower*2<=power){
		product*=product;
		curPower+=curPower;
	}
	return product*powerHelper(base, power-curPower);
}
// base case 
console.log(myPow(-1,35));