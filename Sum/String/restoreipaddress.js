/*
	@param {string} s
	@return {string[]}
*/
var restoreIpAddress = function(s) {
	var res = [];
	backtrackHelper(s, 0, [], res);
	return res;
};

function backtrackHelper (s, n, subres, res){
	if(n===4){
		// console.log(subres);
		// ****
		if(s.length===0){
			res.push(subres.join('.'));
		}
		return;
	}
	// for(var i=startBlock; i<4; i++){
		for(var l=1; l<4; l++){
			if( parseInt(s.substring(0, l), 10)<256 && 
				// substring may not be a qualified number, so we need to check the number first 
				// transform the string to number first 
				(parseInt(s.substring(0,l),10).toString()===s.substring(0,l)) &&
				(s.length - l)>=3-n && 
				(s.length - l)<=3*(3-n) ){
				// console.log('in building');
				subres.push(parseInt(s.substring(0, l), 10));
				backtrackHelper(s.substring(l), n+1, subres, res);
				subres.pop();
			}
		}
	// }
}

var input = '010010';
console.log(restoreIpAddress(input));