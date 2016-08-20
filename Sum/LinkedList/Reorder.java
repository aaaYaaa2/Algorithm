// Recorder List 

public class Recorder {
	public void reorderList(ListNode head){
		if(head==null || head.next==null) return;

		ListNode slow = head, fast = head;
		while(fast.next!=null && fast.next.next!=null){
			slow = slow.next;
			fast = fast.next.next;
		}
		ListNode preMiddle = slow;
		ListNode preCurrent = slow.next;
		
		// reverse the second half of the list
		// preMiddle becomes to fakehead, everytime you process a node 
		// to append it to the front, you point the preMiddle.next = current 

		while(preCurrent.next!=null){
			ListNode current = preCurrent.next;
			preCurrent.next = current.next;
			current.next = preMiddle.next;
			preMiddle.next = current;
		}

		// *** reorder
		slow = head;
		fast = preMiddle.next; 
		while(slow!=preMiddle){
			// reserve the next fast item 
			preMiddle.next = fast.next;
			// point the fast next to 
			fast.next = slow.next;
			// reorder current slow and fast 
			slow.next = fast;
			// deal with next slow and fast item 
			slow = fast.next;
			fast = preMiddle.next;
		}
	}
}