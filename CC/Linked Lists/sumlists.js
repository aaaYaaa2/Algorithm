/*
	2.5 Sum Lists
	You have two numbers represented by a linked list, where each node contains a single digit. 
	The digits are store in reverse order, write a function that adds the nunbers and returns the sum 
	as a linked list 

	Follow up:
	reverse two linkedlist order, do it again 
*/

// linked list
function LinkedList(val){
	this.val = val;
	this.next = null;
}
// iterative solution 
var sumLists = function(list1, list2){
	var one = false, fakehd = new LinkedList(-1);
	fakehd.next = list1;
	while(list1!==null && list2!==null){
		if(one) list1.val++;
		one = false;
		list1.val = list1.val + list2.val;
		if(list1.val>9) {
			one = true;
			list1.val = list1.val%10;
		}
		list1 = list1.next;
		list2 = list2.next;
	}
	while(list1!==null){
		if(one) list1.val++;
		one = false;
		if(list1.val>9) one = true;
		list1 = list1.next;
	}
	while(list2!==null){
		if(one) list2.val++;
		one = false;
		list1.next = list2;
		if(list2.val>9) {
			list2.val = list2.val%10;
			one = true;
		}
		list1 = list1.next;
		list2 = list2.next;
	}
	if(one) list1.next = new LinkedList(1);
	return fakehd.next;
};

// recursive solution 
/*
	Common behavior: add the head to the front as recursively going deeper 
*/

var sumListRec1 = function(list1, list2){
	return sumHelper(list1, list2, 0);
};

function sumHelper(l1, l2, carry){
	if(l1===null && l2===null && carry===0) return null;

	var newHead = new LinkedList();
	var value = carry;
	if(l1!==null) value+=l1.val;
	if(l2!==null) value+=l2.val;
	newHead.val = value%10;
	// recursion
	if(l1!==null || l2!==null){
		var more = sumHelper((l1.next===null? null : l1.next), (l2.next===null? null : l2.next), value>9? 1 : 0);
		newHead.next = more;
	}
	return newHead;
}
/*
	for reverse order 
*/
// iterative, use extra space 
var sumLists2 = function(list1, list2){
	// use extra space
	var num1=[], num2=[], one=false;
	while(list1!==null) num1.push(list1.val);
	while(list2!==null) num2.push(list2.val);
	for(var i=num1.length-1, j=num2.length-1; i>=0 || j>=0; i--, j--){
		var tmp = (i>=0? num1[i] : 0) + (j>=0? num2[j] : 0) + (one? 1 : 0);
		one = false;
		if(tmp>9){
			var cur = tmp%10;
			one = true;
			if(i<0) num1.shift(cur);
		}
	}
	if(one) num1.shift(1);
	var fakehd = new LinkedList(-1), pointer = fakehd;
	for(var k=0; k<num1.length; k++){
		pointer.next = new LinkedList(num1[k]);
	}
	return fakehd.next;
};

function sumRevRes(l1, l2) {
	if(l1===null && l2===null){
		var sum = new PartialSum();
		return sum;
	}
	var sum = sumRevRes(l1.next, l2.next);
	var val = sum.carry + l1.val + l2.val;
	var full_result = insertBefore(sum.sum, val%10);
	sum.sum = full_result;
	sum.carry = Math.floor(val/10);
	return sum;
}
// a wrapper class 
function PartialSum(){
	this.sum = null;
	this.carry = 0;
}

function insertBefore(list, data){
	var node = new LinkedList(data);
	if(list!==null){
		node.next = list;
	}
	return node;
}