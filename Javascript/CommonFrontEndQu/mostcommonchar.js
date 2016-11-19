var mostcommonChar = function(str){
	if(str === undefined || str.length === 0) return;
	var hashtable = {};
	var arr = str.split('');
	// build hashtable of counts 
	for(var i=0; i<arr.length; i++){
		if(hashtable[arr[i]] === undefined){
			hashtable[arr[i]] = 0;
		}
		hashtable[arr[i]]+=1;
	}

	// find the target character
	var gMax = 0, gChar;
	for(var key in hashtable){
		if(hashtable[key]>gMax){
			gMax = hashtable[key];
			gChar = key;
		}
	}
	return gChar;
};

var input = 'abcd';
console.log(mostcommonChar(input));