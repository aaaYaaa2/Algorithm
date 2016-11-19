// recursive solution 
var quicksort = function(arr, left, right){
	if(left < right){
		var pivot = arr[right], i = left-1;
		for(var j=left; j<=right; j++){
			if(arr[j]<=pivot){
				var temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
				i++;
			}
		}
		quicksort(arr, left, i-1);
		quicksort(arr, i+1, right);
	}
	return arr;
};

// iterative solution 
var quicksort2 = function(arr){
	if(arr.length <=1 ) return arr;

	var pivot = arr[arr.length-1], small = [], large = [];

	for(var i=0; i<arr.length-1; i++){
		if(arr[i]<=pivot){
			small.push(arr[i]);
		}else{
			large.push(arr[i]);
		}
	}
	return quicksort2(small).concat([pivot], quicksort2(large));
};

