/*
	@param {number[][]} obstacleGrid
	@return (number)
*/
// A simplified version of dynamic programming logic 
// since the result of every position relies on its left(previous) and upper(same position in previous row)

var uniquePathWithObstacles = function(obstacleGrid){
	var recordRow = Array.apply(null, Array(obstacleGrid[0].length)).map(function(){return 0;});
	// don't forget to initialize 
	recordRow[0]=1;
	for(var i=0; i<obstacleGrid.length; i++){
		for(var j=0; j<obstacleGrid[0].length; j++){
			if(obstacleGrid[i][j]===1){
				recordRow[j]=0;
			}else if(j>0){
				// if it is not the corner place, 
				// the corner place only has only one way to there
				recordRow[j]+=recordRow[j-1];
			}
		}
	}
	return recordRow[obstacleGrid[0].length-1];
};