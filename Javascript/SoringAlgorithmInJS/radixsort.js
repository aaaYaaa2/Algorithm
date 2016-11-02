var radixsort = function(arr, maxDigit){
	if(arr === undefined || arr.length<=1) return arr;

	var mod = 10, dev = 1, bucket = [];
	for(var s=0; s<10; s++) bucket[s] = [];
	for(var d=1; d<=maxDigit; d++, mod*=10, dev*=10){
		// add numbers to bucket
		for(var i=0; i<arr.length; i++){
			var bktIdx = parseInt((arr[i]%mod)/dev);
			bucket[bktIdx].push(arr[i]);
		}

		// remove numbers from buckets
		var idx = 0;
		for(var j=0; j<10; j++){
			var len = bucket[j].length;
			for(var ct=0; ct<len; ct++){
				arr[idx++] = bucket[j].shift();
			}
		}
	}
	return arr;
};

var input = [22,12,11,3,4,6,7,23,5,9,45];

console.log(radixsort(input, 2));