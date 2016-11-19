var uniquearray = function(arr){
	var hashtable = {}, result = [];
	for(var i=0; i<arr.length; i++){
		if(hashtable[arr[i]] === undefined){
			hashtable[arr[i]] = true;
			result.push(arr[i]);
		}
	}
	return result;
};

var input = [1,2,1,3,4,5,5,5,6,2];
console.log(uniquearray(input));