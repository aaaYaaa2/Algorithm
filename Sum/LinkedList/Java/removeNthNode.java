public class RemoveNthNode{
	public ListNode removeNthFromEnd(ListNode head, int n){
		ListNode start = new ListNode(0);
		ListNode slow = start, fast = start;
		slow.next = head;

		// Move the fast in front of that the gap 
		for (int i=1; i<=n+1; i++){
			fast = fast.next;
		}

		// Move fast to the end, maintaining the gap 
		while(fast !=null){
			slow = slow.next;
			fast = fast.next;
		}

		//Skip the desired node
		slow.next = slow.next.next;
		return start.next;
	}
}