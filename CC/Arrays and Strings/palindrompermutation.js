/*
	Given a String, write a function to check if it is a permutation of a palindrome 
*/
/*
	@param {String} str
	@return {boolean} 
*/
var palindromePerm = function(str) {
	var set = {}, count=0;
	str = str.split('');
	for(var i=0; i<str.length; i++){
		if(set[str[i]]!==undefined){
			set[str[i]]++;
		}else{
			set[str[i]] = 1;
		}
	}
	for(key in set){
		if(set[key]%2!==0) count++;
	}
	return count<=1? true : false;
};

var palin = ['b', 'a', 'r', 'd', 'r', 'a', 'b'];
var input = 'arbab';
console.log(palindromePerm(input));