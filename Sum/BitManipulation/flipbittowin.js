var flipbittowin = function(num){
	var factor = 1, hi=0;
	while(num>factor){
		hi++;
		factor*=2;
	}
	hi--; // highest point need minus one 
	console.log(hi);
	// count initial length
	var initial = [];
	initial.push(1);
	var max = 0;
	for(var i=hi-1; i>=0; i--){ 
		if((num & (1<<i))!==0){
			// if current bit is 1
			initial.push(initial[initial.length-1]+1);
		}else{
			// if current bit is 0, then curretn position is 0
			initial.push(0);
		}
		max = Math.max(max, initial[initial.length-1]);
	}
	console.log(initial);
	// find the max value 
	for(var j=0; j<initial.length; j++){
		if(initial[j] === 0){
			var tmpMax = 1;
			if(j-1>=0 && initial[j-1]!==0) tmpMax+=initial[j-1];
			if(j+1<initial.length && initial[j+1]!==0) tmpMax+=initial[j+1];
			max = Math.max(max, tmpMax);
		}
	}
	return max;
};

console.log(flipbittowin(36));


