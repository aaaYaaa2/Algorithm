/*
	ZigZag Conversion
	@param {string} s
	@param {number} numRows
	@return {string}
*/

var convert = function(s, numRows) {
	var sArr = s.split('');
	var resArr = [];
	for(var ct=0; ct<numRows; ct++) resArr[ct] = [];
	for(var i=0; i<sArr.length; ){
		for(var idx1=0; idx1<numRows && i<s.length; idx1++){
			resArr[idx1].push(sArr[i++]);
		}
		for(var idx2=numRows-2; idx2>0 && i<s.length; idx2--){
			resArr[idx2].push(sArr[i++]);
		}
	}
	for(var k=0; k<numRows; k++){
		resArr[k] = resArr[k].join('');
	}
	return resArr.join('');
};

console.log(convert('autumiscomingthisweek', 5));