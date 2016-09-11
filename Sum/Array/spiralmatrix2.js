/*
	@param {number} n
	@return {number[][]}
*/

var generateMatrix = function(n) {
	var element = 1, startCol=0, endCol=n-1, startRow=0, endRow=n-1;
	var matrix = Array.apply(null, Array(n)).map(function(){ return Array(n);});
	while(startCol<=endCol && startRow<=endRow){
		for(var top=startCol; top<=endCol; top++) matrix[startRow][top]=element++;
		startRow++;
		for(var right=startRow; right<=endRow; right++) matrix[right][endCol]=element++;
		endCol--;
		if(startRow<endRow){
			for(var bottom=endCol; bottom>=startCol; bottom--) matrix[endRow][bottom]=element++;
			endRow--;
		}
		if(startCol<endCol){
			for(var left=endRow; left>=startRow; left--) matrix[left][startCol]=element++;
			startCol++;
		}
	}
	return matrix;
};

var input = 5;
console.log(generateMatrix(input));