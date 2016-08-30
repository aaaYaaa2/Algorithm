// 08/30/16
// CC 1.1 

/*
	Implement an algorithm to determine if a string has all unique characters. 
	What if you can not use additional data structure? 
*/
/*
 	@param [String] s 
 	@return [Boolean]
*/
var uniqueCharacters1 = function(s){
	// initialize the array with all 0s value 
	var records = Array.apply(null, Array(256)).map(function(){ return 0; });
	// var records = Array(256).fill(0);
	// iterate through the string 
	for(var i=0; i<s.length; i++){
		if(records[s.charCodeAt(i)]) return true;
		records[s.charCodeAt(i)]++;
	}
	return false; 
}; // Time Complexity O(n),  n is the length of the string 

// var input = 'srte';
// console.log(uniqueCharacters(input));

// method 2: use a set 
// you can use a array based implementation, if the key requires to be numbers 
// you can use the object based implementation of set, the time complexity varies 

var uniqueCharacters2 = function(s) {
	// initialize the set 
	var set = {};
	for(var i=0; i<s.length; i++){
		if(set[s.charAt(i)]) return true;
		set[s.charAt(i)] = true;
	}
	return false;
};

// var input = 'wferxct';
// console.log(uniqueCharacters2(input));