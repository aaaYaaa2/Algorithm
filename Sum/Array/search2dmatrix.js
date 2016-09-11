/*
	@param {number[][]} matrix
	@param {number} target
	@return {boolean}
*/
// perform binary search on a 2D matrix 
/*
	This method has several drawbacks:
	matrix.length*matrix[0].length could overflow 

	This method gives us some insights: 
	1) matrix mapping technique,
	2) Treat a 2D matrix like a 1D matrix 
*/
var searchMatrix = function(matrix, target) {
	var low = 0, high = matrix.length*matrix[0].length-1;
	while(low<=high){
		var mid = low + (high-low)/2;
		var cur = matrix[Math.floor(mid/matrix[0].length)][mid%matrix[0].length];
		if(cur > target){
			high = mid-1;
		}else if(cur < target){
			low = mid+1;
		}else{
			return true;
		}
	}
	return false;
};