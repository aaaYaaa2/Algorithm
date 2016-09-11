/*
	Given an array sorted in descending order, 
	rearrange it into [largest, smallest, second largest, second smallest, third largest, third smallest];
	all numbers are positive number

	Do it in Time Complexity O(N), space complexity O(1)
*/

var rearrayDesc = function(array){
	// get the new position of the element 
	function getIndex (oldIdx){
		if(oldIdx<=Math.floor(array.length/2)){
			return 2*oldIdx;
		}else{
			return (array.length-oldIdx-1)*2+1;
		}
	}

	for(var i=0; i<array.length; i++){
		// keep the old element 
		var tmp = array[i];
		if(tmp<0) continue;
		while(true){
			var newIdx = getIndex(i);
			var tmp2 = array[newIdx];
			if(tmp<0) break;
			// mark the place where correct element has been put
			array[newIdx] = -1*tmp;
			tmp = tmp2;
			i = newIdx;
		}
	}

	for(var k=0; k<array.length; k++){
		if(array[k]<0) array[k] = -1*array[k];
	}
	return array;
};

var input = [7,6,5,4,3,2,1];
console.log(rearrayDesc(input));
