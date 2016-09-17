/*
	2.2 Return Kth to Last

	Implement an algorithm to find the kth to last element of singly linked list. 

	Follow Up: how would you solve the probelm if temproray buffer is not allowed 
*/

// definition of a singly-linked list

function ListNode(val){
	this.val = val;
	this.next = null;
}

/*
	@param {Object} LinkedList
	@return {Object} Kth to the Last Node
*/

// method one, count the total nodes number, iterative, nodes number is known  
var kthToLastNode1 = function(linkedlist, k) {
	var head = linkedlist, pointer = Linkedlist, len=0;
	while(pointer!==null){
		len++;
		pointer = pointer.next;
	}// count the length of the linkedlist 

	for(var i=0; i<len-k; i++){
		head = head.next;
	}
	return head;
};

// two pointer iterative methods
// use two pointer 
var kthToLastNode3 = function(linkedlist, k) {
	/*
      keep iterator k steps away from the current one, then we need when the k further node reaches 
      the end, we find the right node at the first iterator 
	*/
};


// recursive method 
var counter = 0; // a global counter to keep track of number 
var kthToLastNode2 = function(linkedlist, k) {
	return recurHelper(linkedlist, k)
};

function recurHelper (node, k) {
	if(node===null) return null;
	var newnode = recurHelper(node.next, k);
	// increase the counter by 1 
	counter++;
	if(counter===k) return node;
	return newnode;
}


var one = new ListNode(1),
	two = new ListNode(2),
	three = new ListNode(3),
	four = new ListNode(4),
	five = new ListNode(5);
	one.next = two;
	two.next = three;
	three.next = four;
	four.next = five;

console.log(kthToLastNode2(one, 1));

