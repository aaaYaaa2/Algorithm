/*
	@param {number[][]}
	@return {number}
*/
// bottom up method Dynamic Programming 
// Dynamic Programming, enumerate all the possible cases, so start from the bottom is a better choice, 
// since we all know that on the next level we should choose a smaller possible value 
// the dp stores the smallest value that could be added to this element so far 

var minimumTotal = function(triangle) {
	var dp = Array.apply(null, Array(triangle.length+1)).map(function(){ return 0;});
	for(var i=triangle.length-1; i>=0; i--){
		var tmp = triangle[i];
		for(var i=0; i<tmp.length; i++){
			dp[i] = Math.min(dp[i], dp[i+1]) + tmp[i];
		}
	}
	return dp[0];
};

