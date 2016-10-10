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
var deleteDuplicates = function(head) {
    if(head===null || head.next===null) return head;
    // if the first node is a duplicate one 
    var fakeHead = new ListNode(0), prev = fakeHead, cur = fakeHead;
    fakeHead.next = head;
    while(cur!==null){
        while(cur!==null && cur.next!==null && cur.val===cur.next.val) cur = cur.next;
        // prev.next === cur means we did not find any duplicate so we can safely move the prev to next 
        if(prev.next === cur){
            // we did not find any duplicate here
            prev = prev.next;
        }else{
            // not sure if the following one is a duplicate element 
            // so set the prev.next = cur.next;
            prev.next = cur.next;
        }
        cur = cur.next;
    }
    return fakeHead.next;
};