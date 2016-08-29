/**
 *	@param {number} numRows
 *	@return {number[][]}
 */
var generate = function(numRows){
	// initialize 
	var triangle = [];
	// if rows number is less than 1
	if(numRows<1) return triangle;
	// directly initialize the first and last 
	for(var j=0; j<numRows; j++) triangle[j] = [];
	for(j=0; j<numRows; j++) triangle[j][0] = triangle[j][j] = 1;

	for(var n=2; n<numRows; n++){
		// triangle[n] = [];
		 for(var i=1; i<n; i++){
		// 	if(i===0 || n===0 || i===n) {
		// 		// for corner case; 
		// 		triangle[n][i] = 1;
		// 	}else{
				triangle[n][i] = triangle[n-1][i] + triangle[n-1][i-1];
		//	}
		 }
	}
	return triangle;
}; // 124ms & 108ms

// directly initialize the first and last element is better than use if in for loop 
// another way to deal with 0 
// result[i][j] = (result[i-1][j] || 0) + (result[i-1][j-1] || 0);

console.log(generate(5));