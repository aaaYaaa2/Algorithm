/*
	2.7 Given Two singly linked list, determine if the two lists instersect. Return the intersecting node.
	Notes that the intersection is defined based on reference, not value. 
*/

/*
	linked list 
*/

function ListNode(val){
	this.val = val;
	this.next = null;
}

/*
	@param list1, list2 
	@return ListNode 
*/
// switch the head after hit the end 
var intersectionLinkedList = function(list1, list2){
	if(list1==null || list2==null) return null;
	
	var pointer1 = list1, pointer2 = list2;
	while(pointer1!==pointer2){
		if(pointer1===null) pointer1 = list2;
		if(pointer2===null) pointer2 = list1;
		pointer1 = pointer1.next;
		pointer2 = pointer2.next;
	}
	return pointer1;
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

nine.next = ten;
ten.next = eleven;
eleven.next = twelve;
twelve.next = five;

console.log(intersectionLinkedList(one, nine));