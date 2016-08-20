/*
	Definition for singly-linked list 
	public class ListNode {
		int val;
		ListNode next;
		ListNoee(int x) { val = x; }
	}
*
*/

public class PartitionList {
	public ListNode partition(ListNode head, int x){
		ListNode dummyHead1 = new ListNode(0),
				 dummyHead2 = new ListNode(0),
				 less = dummyHead1,
			     greater = dummyHead2;

		while(head!=null){
			if(head.val < x){
				less.next = head;
				less = less.next;
			}else{
				greater.next = greater;
				greater = greater.next;
			}
			head = head.next;
		}
		greater.next = null;
		less.next = dummyHead2.next;
		return dummyHead1.next;
	}
}