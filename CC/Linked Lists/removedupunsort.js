/*	/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
	2.1 Write code to remove duplicates from an unsorted linked list 

	FOLLOW UP 

	How would you solve this problem if a temporary buffer is not allowed
*/
// BE CAREFUL if it want all distinct elements or all remove all duplicates 
// use a set to keep record of the elements that are present while iterating through the list, if the list 
// has appeared before, delete it. 

/*
	@param {Object} linked list 
	@return {Object} linked list that removed duplicates 
*/
/*
	Definition for singly-linked list.
	function ListNode(val) {
		this.val = val;
		this.next = null;
	}
*/
var removedupunsort1 = function(list){
	var set = {};
	// use a fakehhead to keep record of the head
	var fakehd = new ListNode(0);
	fakehd.next = list;
	var pointer = fakehd;

	while(pointer!==undefined && pointer.next!==undefined){
		if(set[pointer.next.val+'']===undefined) {
			set[pointer.next.val+''] = true;
		}else{
			// there is a duplicate here 
			pointer.next = pointer.next.next;
		}
		pointer = pointer.next;	
	}
	return fakehd.next;
}; // Time Complexity is O(N) and space Complexity is O(N); 

// if buffer space is not allowed 

/*
	First method is to keep two pointer, delete the current element that appear later in the linkedlist 
*/

var removedupsort2 = function(list){
	var fakehd = new ListNode(0);
	fakehd.next = list;
	var cur=fakehd.next, comp = fakehd.next;

	while(cur!==undefined){
		// set the pointer back to current element 
		comp = cur;
		while(comp!==undefined && comp.next!==undefined) {
			if(comp.next.val===cur.val){
				comp.next = comp.next.next;
			}
			comp = comp.next;
		}
		cur = cur.next;
	}
	return fakehd.next;
}; // time Complexity is O(N^2)

/*
	third method is to order the list first then remove duplicates 
*/

var removedupsort3 = function(list) {
	// merge sort the linked list 
	list = sort(list);
	// delete duplicates
	var fkhd = new ListNode(0);
	fkhd.next = list;
	var pointer = fkhd.next; 
	while(pointer!==undefined && pointer.next!==undefined){
		if(pointer.val<pointer.next.val){
			pointer = pointer.next;
		}else{
			pointer.next = pointer.next.next;
		}
	}
	return fkhd.next;
};

function sort(list) {
	if(list===undefined || list.next===undefined) return list;
	var slow = list, fast = list;
	while(fast!==undefined && fast.next!==undefined){
		slow = slow.next;
		fast = fast.next.next;
	}
	fast = slow.next;
	slow.next = undefined;

	var l1 = sort(list);
	var l2 = sort(fast);

	return merge(l1, l2);
}

function merge (list1, list2) {
	var fakehd = new ListNode(0);
	var pointer = fakehd;

	while(list1!==undefined && list2!==undefined){
		if(list1.val>list2.val){
			pointer.next = list2;
			list2 = list2.next;
		}else{
			pointer.next = list1;
			list1 = list1.next;
		}
	}
	return fakehd.next;
}

