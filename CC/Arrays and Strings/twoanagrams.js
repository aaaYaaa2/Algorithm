// 08/31/2016
/*
	1.4 Write a method to decide if two strings are anagrams or not 
*/

// maybe need to ask the interviewee what are the passible characters 

// method 1 is you can sort and then compare if two strings are equal 

// method 2 is to keep a array of length 256, we iterate through first array, we add one,
// later we iterate through second string, minus one, if the final result is not 0 then something is row 

/*
	why 256? the ACSII table is of 256 length. 
*/

/*
	@param {String} str1, str2
	@return {Boolean} 
*/
var twoanagrams = function(str1, str2){
	// convert string to char array
	if(str1.length!==str2.length) return false; 
	// new array with all 0s 
	var records = Array.apply(null, Array(256)).map(function(){ return 0; });

	// first iteration 
	for(var i=0; i<str1.length; i++){
		records[str1.charCodeAt(i)]++;
	}
	// second iteration
	for( i=0; i<str2.length; i++){
		if((--records[str2.charCodeAt(i)])!==0) return false;
	}
	return true;
}

var s1 = 'abcv';
var s2 = 'bcaes';
console.log(twoanagrams(s1, s2));