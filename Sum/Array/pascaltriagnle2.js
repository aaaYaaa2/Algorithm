/** 
 *	@param {number} rowIndex
 *	@return {number[]}
 */

 var getRow = function(rowIndex) {
 	var result = [];
 	// initialize the first element to 1 
 	result[0] = 1;
 	for(var i=1; i<=rowIndex; i++){
 		var tmp = [];
 		tmp[0] = 1;
 		for(var j=1; j<i-1; j++){
 			tmp[j] = result[j-1] + result[j];
 		}
 		// the last element is 1 
 		tmp[j] = 1;
 		result = tmp;
 		// garbage collection 
 		tmp = null;
 	}
 	return result;
 };// a slow and standard JS solution 


// to start from the back, since the value only depends on the previous values 
 var getRow2 = function(rowIndex) {
 	var result = [1];
 	for(var i=1; i<=rowIndex; i++){
 		for(var j=i; j>0; j--){
 			if(j===i){
 				result[j] = 1;
 			}else{
 				result[j] = result[j-1] + result[j];
 			}
 		}
 	}
 	return result;
 }

 console.log(getRow2(4));