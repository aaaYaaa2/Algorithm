public class OddEvenLinkedList{
	public ListNode oddEvenList(ListNode head){
		ListNode odd = head, 
				 even = head.next, 
				 // keep track of head of even
				 evenHead = even;
		while(even!=null && even.next!=null){
			odd.next = even.next;
			odd = odd.next;
			even.next = odd.next;
			even = even.next;
		}
		odd.next = evenHead;
		return head;
	}
}