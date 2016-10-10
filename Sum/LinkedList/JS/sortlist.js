/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // time complexity O(NlgO) 
var sortList = function(head) {
    // if the head is null
    if(head===null || head.next===null) return head;
    var slow = head, fast = head, prev=null;
    // partition 
    while(fast!==null && fast.next!==null){
        // do not forget to keep a prev value for tracking the previous element 
        // the stop position is where fast.next===null, so the current slow is the head of second part 
        // so we need a prev element to keep track of tail of first part 
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // get the partitioned linkedlist 
    prev.next = null;
   
    var l1 = sortList(slow);
    var l2 = sortList(head);
    
    return merge(l1, l2);
};

// merge function 
// @param l1, l2 linked list 
// @return linked-list
function merge(l1, l2){
    var fakeHd = new ListNode(0), pointer = fakeHd;
    while(l1!==null && l2!==null){
        if(l1.val<=l2.val){
            pointer.next = l1;
            l1 = l1.next;
        }else{
            // f(l1.val>l2.val)
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    // if there are nodes that left
    if(l1!==null) pointer.next = l1;
    if(l2!==null) pointer.next = l2;
    return fakeHd.next;
}