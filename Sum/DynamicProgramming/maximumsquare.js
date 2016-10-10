/*
	@param {character[][]} matrix
	@return {number}
*/

var maximalSquare = function(matrix){
	if(matrix===undefined || matrix.length===0) return 0;
	if(matrix.length===1){
		for(var j=0; j<matrix[0].length; j++){
			if(matrix[0][j]==='1') return 1;
		}
		return 0;
	}
	var dp = [], len = matrix[0].length, max=0, pre=[];
	// initialize the array 
	dp[0] = 0;
	// since matrix contains character, so we parse it to integer 
	for(var i=0; i<matrix[0].length; i++) pre[i] = parseInt(matrix[0][i], 10);
	for(var row=1; row<matrix.length; row++){
		for(var col=0; col<len; col++){
			// use only one space to keep record of previous up left corner
			dp[0] = matrix[0];
			if(matrix[row][col]==='1'){
				dp[col+1] = Math.min(Math.min(pre, dp[col]), dp[col+1])+1;
			}else{
				dp[col+1] = 0;
			}
			max = Math.max(max, dp[col+1]);
			pre = tmp;
		}
		console.log(dp);
	}
	return max*max;
};
var matrix = [
	['1', '1'],
	['1', '1']
];
console.log(maximalSquare(matrix));

