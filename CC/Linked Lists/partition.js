/*
	2.4 Partition 
	Write code to partition a linked list around a value x, such that all nodes less than x comes before
	all nodes greater than or equal to x. 
	If x is contained within the list, the values of x only need to be after the elements less than x 
	The partition element x can appear anywhere in the "right partition"; it does not need to appear between 
	the left and right partitions. 
*/

// linkedlist

function ListNode(val) {
	this.val = val;
	this.next = null;
}

// method one, keep a pointer to the end of small element 
// as we iterate through the linkedlist, if we encounter an element larger than x, 
// delete it at original place and then insert to the end of small elements 
// this will keep the original order of the linked list 
var partition = function(linkedlist, x) {
	// dummy head 
	var small = new ListNode(0), 
		smalltracker = small,
		pointer = linkedlist,
		pre = null;
		small.next = linkedlist;

	while(pointer!==null){
		if(pointer.val<x){ 
			var tmp = pointer.next;
		// insert a smaller node 
			pointer.next = smalltracker.next;
			smalltracker.next = pointer;
		// keep the smalltracker for possibility updating pre 
			var tmp2 = smalltracker.val;
			smalltracker = smalltracker.next;
			//console.log(smalltracker.val);
		// delete the pointer node 
			if(pre===null || pre.val===tmp2) pre = smalltracker;

			pre.next = tmp;
			pointer = tmp;
		}else{
			pre = pointer;
			pointer = pointer.next;
		}
		//console.log(pre.val);
	}
	return small.next;
};

// method 2, if we do not care about the relative order 

var partition1 = function(linkedlist, x){
	var head = linkedlist,
		tail = linkedlist;

	while(linkedlist!==null){
		var tmp = linkedlist.next;
		if(linkedlist.val<x){
			linkedlist.next = head;
			head = linkedlist;
		}else{
			tail.next = linkedlist;
			tail = tail.next;
		}
		linkedlist = tmp;
	}
	tail.next = null
	return head;
};

var five = new ListNode(11),
	seven = new ListNode(7),
	ten = new ListNode(10),
	thirtyfour = new ListNode(34),
	fifty = new ListNode(50),
	two = new ListNode(2),
	one = new ListNode(1),
	three = new ListNode(3);

five.next = seven;
seven.next = ten;
ten.next = thirtyfour;
thirtyfour.next = fifty;
fifty.next = two;
two.next = one;
one.next = three;

var res = partition1(five, 10);
var count = 0;
while(res!==null){ 
	console.log(res);
	res = res.next;
}