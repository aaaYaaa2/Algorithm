/*
	2.6 Palindrome: Implement a function to check if a linkedlist is a palindrome
*/

function ListNode(val){
	this.val = val;
	this.next = null;
}
// reverse the second half 
var isPalindrome = function(node){
	var slow = node, fast = node;
	while(fast!=null && fast.next!=null){
		slow = slow.next;
		fast = fast.next.next;
	}
	// reverse the second half
	var copysecond = slow;
	slow.next = null;
	var second = reverseSecond(copysecond);
	while(node!==null && second!==null){
		if(node.val !== second.val) return false;
		node = node.next;
		second = second.next;
	}
};
// recursively reverse 
var head = new ListNode();
function reverseSecond(node, prev){
	if(node.next===null){
		head = node;
		node.next = prev;
		return null;
	}
	var tmp = node.next;
	node.next = prev;
	reverseSecond(tmp, node);
	return head;
}

// iteratively reverse
function reverseSecondIter(node){}

var one = new ListNode(1),
	two = new ListNode(2),
	three = new ListNode(3),
	four = new ListNode(4),
	five = new ListNode(5),
	six = new ListNode(6),
	seven = new ListNode(7),
	eight = new ListNode(8);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;

console.log(reverseSecond(one, null));

