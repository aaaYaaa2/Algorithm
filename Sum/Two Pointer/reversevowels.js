/*
	@param {string} s
	@return {string}
*/

var reverseVowels = function(s) {
	var arr = s.split(''), vowels = ['a', 'e', 'i', 'o', 'u'];
	for(var i=0, j=arr.length-1; i<j; ){
		while(vowels.indexOf(arr[i].toLowerCase())===-1 && i<j) i++;
		while(vowels.indexOf(arr[j].toLowerCase())===-1 && i<j) j--;
		if(vowels.indexOf(arr[i].toLowerCase!==-1) && vowels.indexOf(arr[j].toLowerCase!==-1) && i<j){
			swap(i, j, arr);
			i++;
			j--;
		}
	}
	return arr.join('');
};

function swap(idx1, idx2, arr) {
	var tmp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = tmp;
}

var input = 'ew';
console.log(reverseVowels(input));