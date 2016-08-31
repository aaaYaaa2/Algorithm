/*
	1.6 Given an image represented by an NXN matrix, where each pixel in the image is 4 bytes,
	write a method to rotate the image by 90 degrees, do it in-place 
*/

/*
	There are two steps to rotate the matrix 90 degrees:
	1. We flip the matrix by its main diagonal 
	2. We then interchange the matrix from step 1 from the top and bottom part 
*/

/*
	@param {number[][]} matrix
	@return {number[][]} matrix 
*/
// counter-clockwise 
var rotateMatrix = function(matrix){
	// flip: swap [i,j] and [j,i]
	for(var i=0; i<matrix.length; i++){
		for(var j=i; j<matrix[0].length; j++){
			var tmp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = tmp;
		}
	}
	// fold the matrix: swap row[i] with row[n-i-1], n is the length of matrix  
	for(i=0; i<Math.floor(matrix.length/2); i++){
		for(j=0; j<matrix[0].length; j++){
			tmp = matrix[i][j];
			matrix[i][j] = matrix[matrix.length-i-1][j];
			matrix[matrix.length-i-1][j] = tmp;
		}
	}

	return matrix;
};

var input = [
	[1,2,4,5,6,7],
	[2,4,5,4,6,7],
	[4,7,9,1,0,6],
	[3,4,5,6,2,5],
	[3,4,5,6,3,7],
	[2,6,7,8,9,0]
];

console.log(rotateMatrix(input));



