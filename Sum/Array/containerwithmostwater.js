/*
	@param {number[]} height
	@return {number}
*/

var maxArea = function(height){
	var maxWater = 0;
	while(front<end){
		maxWater = Math.max((end-front)*Math.min(height[front], height[end]), maxWater);
		// only if we shifting the smaller side, we have the possibility to have a larger area 
		if(height[front]<height[end]){
			front++;
		}else{
			end--;
		}
	}
	return maxWater;
};

