public class SwapNodes{
	public ListNode swapPairs(ListNode head){
		ListNode newhead = new ListNode(0);
		newhead.next = head;
		ListNode current = newhead;
		while(current.next!=null && current.next.next!=null){
			ListNode first = current.next;
			ListNode second = current.next.next;

			first.next = second.next;
			current.next = second;
			second.next = first;
			current = current.next.next;
		}
		return newhead.next;
	}
}