/*
	@param {string} version1
	@param {string} version2
	@return {number} 
*/

var compareVersion = function(version1, version2) {
	var v1Arr = version1.split('.'), v2Arr = version2.split('.');
	var tmpRes = 0;
	for(var i=0; i<Math.min(v1Arr.length, v2Arr.length); i++){
		if(parseInt(v1Arr[i], 10) > parseInt(v2Arr[i], 10)){
			tmpRes = 1;
			break;
		}
		if(parseInt(v1Arr[i], 10) < parseInt(v2Arr[i], 10)){
			tmpRes = -1;
			break;
		}
	}
	
	if(tmpRes===0){
		while(i<v1Arr.length){
			if(parseInt(v1Arr[i++])!==0) tmpRes = 1;
		}
		while(i<v2Arr.length){
			if(parseInt(v2Arr[i++])!==0) tmpRes = -1;
		}
	}
	return tmpRes;
};

var ver1 = '0.0.0.4', ver2 = '0.0.3';

console.log(compareVersion(ver1, ver2));