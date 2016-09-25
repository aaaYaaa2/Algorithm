/*
	2.8 Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop 
*/

/*
	linkedlist definition
*/

function ListNode(val){
	this.val = val;
	this.next = null;
}

/*
	@param linkedlist with loop
	@return listNode 
*/
var loopdetection = function(list){
	if(list===null) return null;
	var slow = list, fast = list;
	// check if the loop exist 
	// don't put while(fast!==slow), it will not end ...
	while(fast!==null && fast.next!==null){
		slow = slow.next;
		fast = fast.next.next;
		if(slow===fast) break;
	}
	if(fast===null || fast.next===null) return null;

	slow = list;
	while(slow!==fast){
		slow = slow.next;
		fast = fast.next;
	}
	return slow;
};

var one = new ListNode(1),
	two = new ListNode(2),
	three = new ListNode(3),
	four = new ListNode(4),
	five = new ListNode(5),
	six = new ListNode(6),
	seven = new ListNode(7),
	eight = new ListNode(8),
	nine = new ListNode(9),
	ten = new ListNode(10),
	eleven = new ListNode(11),
	twelve = new ListNode(12);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;
eight.next = four;

console.log(loopdetection(one));



