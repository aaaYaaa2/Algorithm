/*
	@param {number} x
	@return {number}
*/
// method one from component part, binary search 
var mySqrt = function(x){
	if(x<=1) return x;
	if(x===3) return 1;
	if(x<9) return 2;
	var arr = [];
	for(var i=2; i<Math.floor(x/2); i++){
		arr.push(i);
	}
	var low = 0, high = arr.length-1;
	while(low<high){
		var mid = low + Math.floor((high-low)/2);
		if(arr[mid]*arr[mid]<x){
			if(mid+1<arr.length && arr[mid+1]*arr[mid+1]<=x){
				low = mid+1;
			}else{
				return arr[mid];
			}
		}else if(arr[mid]*arr[mid]>x){
			if(mid-1>=0 && arr[mid-1]*arr[mid-1]>=x){
				high = mid-1;
			}else{
				return arr[mid-1] || arr[mid];
			}
		}else{
			return arr[mid];
		}
	}
};

// console.log(mySqrt(23433));

// method two from result part, binary search

var mySort2 = function(x){
	if(x<1) return x;
	var low = 1, high = x;
	while(low<high){
		var mid = low + Math.floor((high-low)/2);
		if(mid<=x/mid){ // use mid*mid could prevent the overflow of mid*mid 
			low = mid+1;
		}else{
			high = mid;
		}
	}
	return low-1; // return minus one, since low-1 is alwasy the floor of the target. 
};


