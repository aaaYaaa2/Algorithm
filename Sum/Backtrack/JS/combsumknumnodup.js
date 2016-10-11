/*
	Combination Sum 1: 
	> Combination Sum
	> Input array does not have duplicates
	> Sum of k elements
	> Output distinct sum result 
*/
// recursive appraoch

/*
	@param k : need sum k elements in each sum 
	@param input : input array 
*/
function combKSumDriver(k, input){
	var fres = [];
	// if the array is not sorted, we need to sort it first to avoid duplicate
	input.sort(function(a, b){ return a-b; });
	combKSumHelper(k, input, 0, fres, 0);
	return fres;
	// the result here may contain duplicate sum value depends on input 
	// if we want distinct value, we can use a hashset instead of an array 
}

/*
	Combination K Sum Helper
*/ 
function combKSumHelper(k, input, subsum, res, pos){
	if(k===0){
		res.push(subsum);
		return;
	}

	for(var i=pos; i<input.length; i++){
		combKSumHelper(k-1, input, subsum+input[i], res, i+1);
	}
}

var input = [3,4,5,6];
console.log(combKSumDriver(2, input));