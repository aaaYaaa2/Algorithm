/*
	@param {number[]} nums
	@param {number} k
	@return {number}
*/

var findKthLargest = function(num, k) {
	var table = {}, curMin = Number.MAX_SAFE_INTEGER, curMax = Number.MIN_SAFE_INTEGER, eleNum=0;
	for(var i=0; i<num.length; i++){
		if(num[i]<curMin){
			if(eleNum<k){
				table[num[i]] = 1;
				eleNum++;
				curMin = num[i];
			}else{
				if(table[curMax]>1){
					table[curMax]--;
				}else{
					// set the previous max to undefined 
					// and redefined the max 
					table[curMax]=undefined;
					curMax = findMax(table);
				}
			}
		}else if(num[i]>=curMin){
			if(elemNum<k){
				insertToTable(table, num[i]);
				curMax = Math.max(num[i], curMax);
				eleNum++;
			}else{
				if(num[i]<curMax){
					if(table[curMax]>1){
						table[curMax]--;
						insertToTable(table, num[i]);
					}else{
						table[curMax] = undefined;
						insertToTable(table, num[i]);
						curMax = findMax(table);
					}
				}
			}
		}
	}
};

function findMax(table){
	var maxKey = Number.MIN_SAFE_INTEGER;
	for(var key in table){
		if(table[key]!==undefined){
			Math.max(maxKey, key);
		}
	}
	return maxKey;
}

function insertToTable(table, ele){
	if(table[ele]){
		table[ele]++;
	}else{
		table[ele]=1;
	}
}