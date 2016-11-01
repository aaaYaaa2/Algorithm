var mergesort = function(arr){
	var len = arr.length;
	if(len <= 1) return arr;

	// divide into two parts 
	var middleIdx = Math.floor(len/2);
	var arr1 = arr.slice(0, middleIdx);
	var arr2 = arr.slice(middleIdx);

	return merge(mergesort(arr1), mergesort(arr2));
};



function merge(arr1, arr2){
	var result = [], idx1=0, idx2=0;

	for(var i=0; i<Math.min(arr1.length, arr2.length); i++){
		if(arr1[idx1]<arr2[idx2]){
			result.push(arr[idx1]);
			idx1++;
		}else{
			result.push(arr[idx2]);
			idx2++;
		}
	}

	if(idx1<arr1.length){
		for(var j=idx1; j<arr1.length; j++) result.push(arr[j]);
	}
	
	if(idx2<arr2.length){
		for(var q=idx2; q<arr2.length; q++) result.push(arr[q]);
	}
	return result;
}