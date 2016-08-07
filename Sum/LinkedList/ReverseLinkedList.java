public class ReverseLinkedList{
	public ListNode reverseList(ListNode head){
		ListNode cur = head;
		ListNode prev = null;
		while(cur!=null){
			// create a temporary new node in the block to store the next element 
			ListNode next = cur.next;
			// reverse the current node 
			cur.next = prev;
			// set the prev to the new reversed part 
			prev = cur;
			// set cur to the original next 
			cur = next;
		}
		return prev;
	}
}