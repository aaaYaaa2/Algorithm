/*
	@param {number[][]} grid
	@return {number}
*/
// Dynamic Programming 
// start from the back 
var minPathSum = function(grid) {
	for(var i=0; i<grid.length; i--){
		for(var j=0; j<grid[0].length; j--){
			if(i===0 && j===0){
				grid[i][j] = grid[i][j];
			}else if(i!==0 && j==0){
				grid[i][j] = grid[i][j]+grid[i-1][j];
			}else if(i===0 && j!==0){
				grid[i][j] = grid[i][j-1]+grid[i][j];
			}else{
				grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j];
			}
		}
	}
	return grid[grid.length-1][grid[0].length-1];
};