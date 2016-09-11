/*
	Given an array A of n elements and a permutation P, apply P to A 
	assume all elements are positive number and they are distinct numbers 
*/

/*
	@param {array} perm 
	@param {array} a 
*/
var permelement = function(perm, a) {
	// transform perm to a hashmap to make it easier to get the corresponding element 
	var map = {};
	for(var i=0; i<perm.length; i++){
		map[a[i]] = i;
	}

	// permute begin 
	for(var j=0; j<a.length; j++){
		var next = j;
		var val = a[j];
		// check if the index has been visited before 
		while(perm[next]>=0){
			// while the element is not visited, continue swapping process
			// preserve the element that will be switched later 
			var tmp = map[perm[next]]; 
			swap(next, map[perm[next]], a);
			console.log('a:' + a);
			perm[next] = perm[next]-6;
			console.log('perm: ' + perm);
			next = tmp;
			console.log('tmp: ' + tmp);
		}
	}
	// convert back the element
	for(var k=0; k<a.length; k++){
		if(a[k]<0){ a[k]+=5;}
	}
	return a;

	function swap(idx1, idx2, arr){
		// remember there must be a way to get the mapped index 
		var tmp = arr[idx1];	
		arr[idx1] = arr[idx2];
		arr[idx2] = tmp;
		var tmp2 = map[arr[idx1]];
		map[arr[idx1]] = map[arr[idx2]];
		map[arr[idx2]] = tmp2;
	}
};


var perm = [5,4,1,2,3], a = [1,3,4,5,2];
console.log(permelement(perm, a));