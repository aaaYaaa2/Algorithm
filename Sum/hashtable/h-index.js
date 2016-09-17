/*
	@param {number[]} citations
	@return {number}
*/
// sort first then find it will be quite easy. 

// use count sort we can sort it in linear time complexity, but with O(N) space 
var hIndex = function(citations){
	if(citations.length===0) return 0;
	var citeLen = citations.length, ctArr = Array.apply(null, Array(citeLen+1)).map(function(){ return 0; });
	console.log(ctArr);
	for(var i=0; i<citeLen; i++){
		// h is only possible for number less than the total paper number
		if(citations[i]>citeLen) continue;
		ctArr[citations[i]]++;
	}
	// console.log(ctArr);
	for(var j=1; j<ctArr.length; j++){
		ctArr[j]+=ctArr[j-1];
	}
	// console.log(ctArr);
	for(var k=ctArr.length-1; k>=0; k--){
		if(k>=ctArr[k]) return ctArr[k];
	}
};

var citations = [3,0,6,1,5];
console.log(hIndex(citations));