
var binarytostring = function(num){
	var factor = 1/2, res = [];
	while(num>0){
		if(num>factor){
			res.push(1);
		}else{
			res.push(0);
		}
		if(res.length>32) return 'EROOR';
		factor*=1/2;
	}
	return '0.' + res.join('');
};

