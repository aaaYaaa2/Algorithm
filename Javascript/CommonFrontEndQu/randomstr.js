function randomstr(n) {
	var baseStr = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var resArr = [];
	for(var i=0; i<n; i++){
		// do not use round here, it will give you a non-uniform distribution 
		var randIdx = Math.floor(Math.random()*36);
		resArr.push(baseStr.charAt(randIdx));
	}
	return resArr.join('');
}

console.log(randomstr(5));