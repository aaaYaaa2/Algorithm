/*
	1.5 
	Three types of actions: insert a character, remove a character and replace a character 
	Given two string, check if they are one edit away with each other 
*/

// method one 
var oneArray1 = function(str1, str2) {
	if(Math.abs(str1.length-str2.length)>1) return false;
	if(Math.abs(str1.length-str2.length)==1) {
		var long = str1.length > str2.length ? str1 : str2;
		var short = str1.length > str2.length ? str2 : str1;
		var count = 0;
		for(var i=0; i<long.length; i++){
			if(str1.charAt(i)!==str2.charAt(i)){
				long.remove(i);
				return long===short? true : false;
			}
		}
	}else{
		var count = 1;
		for(var j=0; j<str1.length; j++){
			if(str1[j]!==str2[j]){
				str1.remove(i);
				str2.remove(i);
				return str1===str2? true : false;
			}
		}
	}
	return true;
};


// method two 
var oneArray2 = function(str1, str2) {
	for(var i=0; i<Math.min(str1.length, str2.length); i++){
		if(str1[i]!==str2[i]){
			if(Math.abs(str1.length-str2.length)===1){
				(str1.length>str2? str1 : str2).remove(i);
				return str1===str2? true : false;
			}else{
				return str1.remove(i)===str2.remove(i)? true : false;
			}
		}
	}
	return str1.length===str2.length? false : true;
};
