public class SortList{
	// sort linkedlist in O(nlogn) time complexity and constant space 
	// merge sort 
	// time complexity is n*logn, n comes from the sub sorting process,
	// log(n) comes from the dividing process 
	public ListNode sortList(ListNode head){
		if(head==null || head.next==null) return head;
		ListNode slow = head, fast = head, prev = null;
		while(fast!=null && fast.next!=null){
			prev = slow;
			slow = slow.next;
			fast = fast.next.next;
		}
		prev.next = null;

		ListNode l1 = sortList(head);
		ListNode l2 = sortList(slow);

		return merge(l1, l2);
	}

	private ListNode merge(ListNode node1, ListNode node2){
		ListNode newHd = new ListNode(0), p = newHd;
		while(node1!=null && node2!=null){
			if(node1.val > node2.val){
				p.next = node2;
				node2 = node2.next;
			}else{
				p.next = node1;
				node1 = node1.next;
			}
			p = p.next;
		}
		return newHd.next;
	}
}