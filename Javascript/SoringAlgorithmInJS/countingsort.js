var countingsort = function(arr){
	// find minimum and maximum value 
	var min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
	for(var i=0; i<arr.length; i++){
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
	}
	// counting sort
	var counts = [];
	for(var k=min; k<=max; k++) counts.push(0);

	for(var j=0; j<arr.length; j++){
		counts[arr[j]-min]++;
	}

	// return sort array 
	var result = [];
	for(var c=0; c<counts.length; c++){
		while(counts[c]>0){
			result.push(min+c);
			counts[c]--;
		}
	}
	return result;
};

var input = [4,67,2,34,12,11,3,4,4,5,6,4,4,11,12,11,11,56,7,9,12,12,12,12,13];

console.log(countingsort(input));

var countingsort2 = function(arr){
	var min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
	for(var i=0; i<arr.length; i++){
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
	}
	// counting sort
	var counts = [];
	for(var k=min; k<=max; k++) counts.push(0);

	for(var j=0; j<arr.length; j++){
		counts[arr[j]-min]++;
	}

	// calculate aggregate count so far
	for(var ct=0; ct<counts.length-1; ct++){
		counts[ct+1]+= counts[ct];
	}

	// start from back to return result
	var result = [];
	for(var p=arr.length-1; p>=0; p--){
		result[counts[arr[p]-min]-1] = arr[p];
		counts[arr[p]-min]--;
	}
	return result;
};

console.log(countingsort2(input));