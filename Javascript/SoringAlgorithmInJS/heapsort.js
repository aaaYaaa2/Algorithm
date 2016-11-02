/*
	@param {Array}: unsorted input array 
	@return {Array}: sorted array 
*/

var heapsort = function(arr){
	if(arr === undefined || arr.length<=1) return arr;
	var heap = buildheap(arr), result = [];
	heapify(heap, result);
	return result;
};

// function for build a max heap
function buildheap(arr){
	var heap = [];
	heap.push(arr[0]);
	for(var i=1; i<arr.length; i++){
		var cur = arr[i];
		heap.push(cur);
		var j = Math.floor(i/2), curIdx = i;
		while(j>=0 && heap[j]<cur){
			// bubble up
			swap(curIdx, j, heap);
			curIdx = j;
			j = Math.floor(j/2);
		}
	}
	// console.log(heap);
	return heap;
}

// function for heapsort 
function heapify(arr, result){
	// swap the top with last element
	if(arr.length < 1 ) return;
	swap(0, arr.length-1, arr);
	var i = 0;
	// the last element is ordered already, and we need only consider range until arr.length-2 as largest idex to compare 
	while((2*i+1<arr.length-1 && arr[i]<arr[2*i+1]) || (2*i+2<arr.length-1 && arr[i]<arr[2*i+2])){
		if(arr[i]<arr[2*i+1] && (2*i+2<arr.length-1 && arr[2*i+2]<arr[2*i+1]) || 2*i+2 >= arr.length-1) {
			swap(i, 2*i+1, arr);
			i = 2*i+1;
			// console.log(arr);
		}else{
			swap(i, 2*i+2, arr);
			// console.log(arr);
			i = 2*i+2;
		}
	}
	result.unshift(arr.pop());
	heapify(arr, result);
}

function swap(idx1, idx2, heap){
	var temp = heap[idx1];
	heap[idx1] = heap[idx2];
	heap[idx2] = temp;
}

var input = [4,16,9,34,21,11,7,2,1];
console.log(heapsort(input)); 
