/*
	1.5 Write a method to replace all spaces in a string with '%20' 
*/

/*
	~ method1 could split them replace and join. 
	~ method2 : iterate through them first, push white space to the end when encounter a white space,
				then starting from the back to rebuild the string 

*/

// method 2
var replacewhitespace = function(str){
	var len = str.length, add=0;
	// build the new string length
	var res = '';
	for(var i=len; i>=0; i--){
		if(str.charAt(i)===' '){
			res = '%20' + res;
		}else{
			res = '' + str.charAt(i) + res;
		}
	}
	return res;
}

var input = 'yo yo awesome animation  ';
console.log(replacewhitespace(input));