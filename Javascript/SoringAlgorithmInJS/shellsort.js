var shellsort = function(arr){
	var gap = 1, temp;
	// set gap 
	while((gap*5+1) < arr.length) gap = gap*5 + 1;

	for(gap; gap > 0; gap = Math.floor(gap/5)){
		for(var i=gap; i<len; i++){
			temp = arr[i];
			for(var j=i-gap; j>=0 && arr[j] > temp; j-=gap){
				arr[j+gap] = arr[j];
			}
			arr[j+gap] = temp;
		}
	}
	return arr; 
};