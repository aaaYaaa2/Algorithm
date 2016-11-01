var selectionsort = function(arr){
	if(arr===undefined || arr.length === 0) return arr;

	for(var i=0; i<arr.length-1; i++){
		var tmpMinIdx = i, min = arr[i];
		for(var j=i+1; j<arr.length; j++){
			if(min > arr[j]){
				tmpMinIdx = j;
				min = arr[j];
			}
		}
		swap(i, tmpMinIdx, arr);
	}
	return arr;
};

function swap(idx1, idx2, arr){
	var tmp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = tmp;
}

var input = [22, 32, 45, 2, 12, 5, 7, 18];
console.log(selectionsort(input));