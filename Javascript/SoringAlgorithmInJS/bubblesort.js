// original bubble sort 

/*
	@param {Array}: unsorted array 
	@return {Array}: sorted array 
*/

var bubblesort1 = function(arr){
	console.time('Original Bubble Sort');
	if(arr === undefined || arr.length === 0) return arr;

	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr.length-1-i; j++){
			if(arr[j]>arr[j+1]){
				swap(j, j+1, arr);
			}
		}
	}
	console.timeEnd('Original Bubble Sort');
	return arr;
}; 

function swap(index1, index2, arr){
	var tmp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tmp;
}

var input = [22,44,5,6,23,78,2,45,50]; 
console.log(bubblesort1(input));

// time 0.638;

var bubblesort2 = function(arr){
	console.time('Improved Bubble Sort I');
	if(arr === undefined || arr.length === 0) return arr;

	var lastSwapPos = arr.length-1;
	for(var i=0; i<=lastSwapPos; i++){
		for(var j=0; j<lastSwapPos; j++){
			if(arr[j]>arr[j+1]){
				swap(j, j+1, arr);
				lastSwapPos = j+1;
			}
		}
	}
	console.timeEnd('Improved Bubble Sort I');
	return arr; 
};

console.log(bubblesort2(input));

var bubblesort3 = function(arr){
	console.time('Improved Bubble Sort II');
	if(arr === undefined || arr.length === 0) return arr;

	var low = 0, high = arr.length-1;
	while(low < high){
		for(var i=low; i<high; i++){
			if(arr[i] > arr[i+1]){
				swap(i, i+1, arr);
			}
		}
		high--;

		for(var j=high; j>low; j--){
			if(arr[j]<arr[j-1]){
				swap(j, j-1, arr);
			}
		}
		low++;
	}
	console.timeEnd('Improved Bubble Sort II');
	return arr; 
};

console.log(bubblesort3(input));



