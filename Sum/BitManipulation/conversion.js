var conversion = function(A, B){
	var count = 0;
	// use >>> unsifned shift
	for(var c=A^B; c!==0; c>>>1){
		count+=(c&1);
	}
	return count;
};

console.log(-4>>1);