/**
	Definition for singly-linked list
	public class ListNode {
		int val;
		ListNode next;
		ListNode (int x) { val = x; }
	}
 */

public class ReverseLinkedListII {
	public ListNode reverseBetween (ListNode head, int m, int n){
		if(head==null) return null;
		ListNode dummyhead = new ListNode(0);
		dummyhead.next = head;
		unreverseHead = dummyhead;

		int i=0;
		while(i<m-1){
			unreverseHead = unreverseHead.next;
			i++;
		}

		ListNode reverseHead = unreverseHead.next;
		ListNode then = reverseHead.next; // node to be reversed 

		for(int count = 0; count< n-m; count++){
			reverseHead.next = then.next; // keep a record to the next node to be reversed  
			then.next = unreverseHead.next;
			unreverseHead.next = then;
			then = reverseHead.next;
		}
		return dummyhead.next;
	}
}