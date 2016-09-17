/*
	2.3 Delete Middle Node
	Implement an algorithm to delete a node in the middle (any node except the first and last) of a singly linkedlist
	given only access to that node 
*/

/*
	@param {Object} node
	@return Void, modified in-place
*/

// linked list
function ListNode(val) {
	this.val = val;
	this.next = null;
}

var deleteMidNode = function(node){
	// handle the node to be delete the last node case here 
	if(node==null || node.next==null){
		node = null;
	}
	var tmp = node.next;
	node.val = tmp.val;
	node.next = tmp.next;
};

var one = new ListNode(1),
	two = new ListNode(2),
	three = new ListNode(3),
	four = new ListNode(4),
	five = new ListNode(5);
	one.next = two;
	two.next = three;
	three.next = four;
	four.next = five;
