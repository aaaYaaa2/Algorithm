/*
	@param {string} s
	@return {number}
*/

var numDecodings = function(s){
	var res = [];
	backtrackHelper(s, [], res);
	return res;
};

function backtrackHelper(s, num, res){
	if(s.length===0){
		res.push(num);
		return;
	}
	for(var i=1; i<=2; i++){
		var curStr = s.substring(0, i);
		var cvNum = parseInt(curStr);
		if( cvNum<=26 && cvNum.toString()===curStr){
			console.log(cvNum);
			num.push(cvNum);
			backtrackHelper(s.substring(i), num, res);
			num.pop();
		}
	}
}

var input = '1286248';
console.log(numDecodings(input));

// starting from the back 
// dynamic programming 
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings2 = function(s) {
    if(s==='undefined' || s.length===0) return 0;
    var dp = []; // an array for keep tracking of number of ways
    dp[s.length] = 1; // initial value of dp is 0 
    for(var i=s.length-1; i>=0; i--){
        if(s.charAt(i)==='0'){
            dp[i]=0;
            continue;
        }
        dp[i] = dp[i+1];
        if(i< s.length-1 && (s.charAt(i)==='1' || (s.charAt(i)==='2' && s.charAt(i+1)<='6'))){
            dp[i]+=dp[i+2];
        }
    }
    return dp[0];
};