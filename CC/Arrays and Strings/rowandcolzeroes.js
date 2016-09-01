/*
	1.7 Write an algorithm such that if an element in an MXN matrix is 0, its entire row and column is set to 0 
*/

/*
	keep a record of row and col 0 place 
*/
/*
	@param {Number} row
	@param {Number} col
	@param {Number[][]} matrix
	@return {Void} modify inplace 
*/
var rowAndColZero = function(row, col, matrix){
	var rowRec = Array.apply(null, Array(row)).map(function(){return 0;}),
		colRec = Array.apply(null, Array(col)).map(function(){return 0;});
	for(var i=0; i<row; i++){
		for(var j=0; j<col; j++){
			if(matrix[i][j]===0){
				if(!rowRec[i]) rowRec[i]=1;
				if(!colRec[j]) colRec[j]=1;
			}
		}
	}

	for(i=0; i<row; i++){
		// map returns a new array, you have to assign it to the old array 
		if(rowRec[i]) matrix[i] = matrix[i].map(function(){return 0;});
		for(j=0; j<col; j++){
			if(matrix[i][j] && colRec[j]) matrix[i][j]=0;
		}
	}
	return matrix;
}; // time complexity O(n^2)

var matrix = [
	[1,2,3,6,4,2],
	[2,5,0,6,6,6],
	[3,0,2,1,4,5]
];

console.log(rowAndColZero(3, 6, matrix));