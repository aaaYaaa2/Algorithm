/*
	@param {number[][]} matrix
	@return {number[]} 
*/

// index recording and circling around 

var spiralOrder = function(matrix) {
	var rowStart = 0, rowEnd = matrix.length-1,
		colStart = 0, colEnd = matrix[0].length-1;
	var result = [];
	while(rowStart<=rowEnd && colStart<=colEnd){
		for(var top=colStart; top<=colEnd; top++) result.push(matrix[rowStart][top]);
		rowStart++;
		for(var right=rowStart; right<=rowEnd; right++) result.push(matrix[right][colEnd]);
		colEnd--;
		if(rowStart<rowEnd){
			for(var bottom=colEnd; bottom>=colStart; bottom--) result.push(matrix[rowEnd][bottom]);
			rowEnd--;
		}
		if(colStart<colEnd){
			for(var left=rowEnd; left>=rowStart; left--) result.push(matrix[left][colStart]);
			colStart++;
		}
	}
	return result;
};

var input = [
	[1,2,3,4,5],
	[6,7,8,9,10],
	[11,12,13,14,15],
	[16,17,18,19,20]
];

console.log(spiralOrder(input));
