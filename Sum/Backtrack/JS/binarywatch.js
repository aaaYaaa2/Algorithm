/*
	@param {number} num
	@return {string[]}
*/

var readBinaryWatch = function(num) {
	// do not need to add 0 in hrMap, since when k=0, there is a 0 sum in the result 
	var hrMap = [1,2,4,8], minMap = [1, 2, 4, 8, 16, 32], fres=[];
	for(var i=0; i<=num; i++){
		var hrList = comKSum(i, hrMap);
		var minList = comKSum(num-i, minMap);
		for(var h=0; h<hrList.length; h++){
			if(hrList[h]>=12) continue;
			var curHr = hrList[h];
			for(var min=0; min<minList.length; min++){
				if(minList[min]>=60) continue;
				var curMin = minList[min]<10? '0' + minList[min] : minList[min];
				fres.push(curHr+':'+curMin);
			}
		}
	}
	return fres;
};

/*
	Combination Sum driver for k elements sum
*/
function comKSum(k, input){
	var fres = [];
	comKSumHelper(k, input, 0, fres, 0);
	return fres;
}

/*
	Combination Sum Backtrack Helper
*/
// recursive appraoch 
function comKSumHelper(k, input, subres, res, pos){
	if(k===0){
		// already include 0 case here 
		res.push(subres);
		return;
	}

	for(var i=pos; i<input.length; i++){
		comKSumHelper(k-1, input, subres+input[i], res, i+1);
	}
}

console.log(readBinaryWatch(2));