console.log(undefined == false); // false
console.log(undefined == true ); // false

var test1 = undefined;
if(test1){
	console.log('undefined is treated as true');
}else{
	console.log('undefined is treated as false');
}