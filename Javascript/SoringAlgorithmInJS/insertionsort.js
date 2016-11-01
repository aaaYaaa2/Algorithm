var insertionsort = function(arr){
	console.time('Insertion Sort Original');
	if(arr === undefined || arr.length <=1 ) return arr;

	for(var i=1; i<arr.length; i++){
		var reserveVal = arr[i];
		for(var j=i-1; j>=0; j--){
			if(arr[j] > reserveVal){
				arr[j+1] = arr[j];
			}else{
				// if arr[j] <= reserveVal
				arr[j+1] = reserveVal;
				break;
			}
		}
	}
	console.timeEnd('Insertion Sort Original');
	return arr;
};

var input = [2, 5, 34, 21, 12 ,22, 3, 4, 89, 10];
console.log(insertionsort(input));

var insertionsort1 = function(arr){
	console.time('Insertion Sort with Binary Search');
	if(arr == undefined || arr.length<=1) return arr;

	for(var i=1; i<arr.length; i++){
		var reserveVal = arr[i], low = 0, high = i;
		while(low < high){
			var mid = low + parseInt((high-low)/2, 10);
			if(arr[mid] < reserveVal){
				low = mid+1;
			}else{
				high = mid-1;
			}
		}
		for(var j=i; j>=high; j--){
			arr[j] = arr[j-1];
		}
		arr[high] = reserveVal;
	}
	console.timeEnd('Insertion Sort with Binary Search');
	return arr;
};

console.log(insertionsort1(input));