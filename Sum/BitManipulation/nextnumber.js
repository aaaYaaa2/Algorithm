var nextnumber = function(n){
	var num = n, count0=0, count1=0;

	// count trailing zeroes 
	while(((num&1))===0 && num!==0){
		count0++;
		num>>=1;
	}

	// count 1s before rightmost not trailing zero
	while((num&1)===1){
		count1++;
		num>>=1;
	}

	// the rightmost not trailing zero is at position p
	var pos = count0+count1;

	// check the corner case e.g 11110000 and 000000 
	if(pos === 31 || pos ===0) return -1;

	// flip pos to 1
	n|=(1<<pos);
	// clear bits right to pos 
	n&=~((1<<pos)-1);
	// set 1s back
	n|=(1<<(count1-1))-1;
	console.log((1<<(count1-1))-1);
	return n;
};

console.log(nextnumber(44));