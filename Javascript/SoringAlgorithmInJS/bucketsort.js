/*
	@param {Array} arr: array of unsorted number
	@param {Number} num: number of buckets 
*/
var bucketsort = function(arr, num){
	if(arr.length<=1) return arr;

	// find the minimum and maximum number 
	var min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
	for(var i=0; i<num.length; i++){
		min = Math.min(min, arr[i]);
		max = Math.max(max, arr[i]);
	}

	// decide bucket range 
	var bucketRange = (max-min+1)/num;
	// put items into bucket
	var buckets = [];
	for(var j=0; j<arr.length; j++){
		var curBkt = parseInt((arr[j]-min+1)/bucketRange, 10);
		if(buckets[curBkt]===undefined){
			// empty bucket insert element first
			buckets[curBkt] = [arr[j]];
		}else{
			// not empty bucket, use insertion sort
			var tmpLen = buckets[curBkt].length-1;
			while(tmpLen>=0 && buckets[curBkt][tmpLen]>arr[j]){
				buckets[curBkt][tmpLen+1] = buckets[curBkt][tmpLen];
				tmpLen--;
			}
			buckets[curBkt][tmpLen+1] = arr[j];
		}
	}
	// concate each buckets
	var result = [];
	for(var c=0; c<buckets.length; c++){
		if(buckets.length>=1)result = result.concat(buckets[c]);
	}
	result.shift();
	return result;
};

var input = [3,4,5,12,23,7,8,10,1,2];
console.log(bucketsort(input, 3));