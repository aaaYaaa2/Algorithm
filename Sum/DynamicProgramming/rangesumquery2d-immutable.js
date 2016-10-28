/*
	@constructor 
	@param {number[][]} matrix
*/
var dp = [];
var NumMatrix = function(matrix){
	// corner case 
	if(matrix === undefined || matrix.length === 0 || matrix[0].length === 0) return;
	for(var i=0; i<=matrix.length; i++){
		dp[i] = [];
		for(var j=0; j<=matrix[0].length; j++) dp[i][j] = 0;
	}

	for(var row=1; row<=matrix.length; row++){
		for(var col=1; col<=matrix[0].length; col++){
			dp[row][col] = dp[row-1][col] + dp[row][col-1] - dp[row-1][col-1] + matrix[row-1, col-1];
		}
	}
};

/*
	@param {number} row1
	@param {number} col1
	@param {number} row2
	@param {number} col2
	@return {number}
*/

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2){
	return dp[row2+1][col2+1]-dp[row1][col2+1]-dp[row+1][col1]+dp[row1][col1];
};