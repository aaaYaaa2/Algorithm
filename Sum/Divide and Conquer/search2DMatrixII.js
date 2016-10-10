/*
	Divide and Conquer
*/

/*
	@param {number[][]} matrix
	@param {number} target
	@return {boolean} 
*/

var searchMatrix = function(matrix, target){
	// start from bottom left
	// if matrix is not defined or matrix is empty then return false 
	if(matrix===undefined || (matrix.length===0 && matrix[0].length===0)) return false;
	var maxRow = matrix.length, maxCol = matrix[0].length, row=maxRow-1, col=0;
	while(row>=0 && col<maxCol){
		if(matrix[row][col]<target){
			col++;
		}else if(matrix[row][col]>target){
			row--;
		}else{
			// equal case
			return true;
		}
	}
	return false;
};