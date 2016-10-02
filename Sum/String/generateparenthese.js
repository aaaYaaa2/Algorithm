/*
	Generate Parenthese
*/

// easy backtrack solution 
/*
	the key is that
	1. if the number of open is larger than close, we can put both open and close parenthese
	2. if the number of open is equal to close, then we can only put open 
	Time Complexity is O(2^n)??
*/

/*
	@param {number} n
	@return {string[]}
*/

var generateParenthesis1 = function(n) {
	var result = [];
	backtrackHelper(0, 0, n, '', result);
	return result;
};

function backtrackHelper (left, right, max, subres, res){
	if(left+right === max*2){
		res.push(subres);
		return;
	}

	// put as many left parenthese as possible 
	if(left < max) {
		subres = subres + '(';
		backtrackHelper(left+1, right, max, subres, res);
	}
	if(left > right) {
		subres = subres + ')';
		backtrackHelper(left, right+1, max, subres, res);
	}
}

console.log(generateParenthesis1(5));

/*

	second method is for dynamic programming

*/

var generateParenthesis2 = function(n){
	var dp = [];
	Array.apply(null, Array(n)).map(function(){ return ''; });

	for(var i=1; i<=n; i++){
		var tmp = [];
		for(var j=0; j<i; j++){
			var item = '(' + dp[j] + ')' + dp[i-1-j];
			tmp.push(item);
		}
	}
};





