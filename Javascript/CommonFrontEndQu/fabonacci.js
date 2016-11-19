var fabonaci = function(n){
	var result = [], i=0;
	while(i<n){
		if(i<=1){
			result.push(i);
		}else{
			result.push(result[i-1] + result[i-2]);
		}
	}
	return result;
};