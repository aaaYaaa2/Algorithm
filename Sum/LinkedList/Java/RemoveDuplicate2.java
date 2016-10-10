/**	
 *	Definition for singly-linked list.
 *	public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val = x; }
 	}
 */

 public class RemoveDuplicate2 {
 	public ListNode deleteDuplicates(ListNode head){
 		// use two pointers, slow to track the node before duplicates
 		// fast, to find the last node of duplicates

 		ListNode dummy = new ListNode(0), 
 		slow = dummy,
 		fast = head,
 		slow.next = fast;

 		while(fast!=null){
 			while(fast.next != null && fast.val == fast.next.val){
 				fast = fast.next;
 			}
 			if(slow.next! = fast){
 				//duplicates detected. 
 				slow.next = fast.next;
 				fast = slow.next;
 			}else{
 				slow = slow.next;
 				fast = fast.next;
 			}
 		}
 	}
 }