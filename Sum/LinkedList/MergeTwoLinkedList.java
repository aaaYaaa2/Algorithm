public class MergeTwoLinkedList{
	public ListNode mergerTwoLists(ListNode l1, ListNode l2){
		ListNode dummyHead = new ListNode(0);
		ListNode current = dummyHead;

		while(l1!=null || l2!=null){
			if(l1==null || (l2!=null && l1.val>=l2.val)){
				current.next = l2;
				l2 = l2.next;
			}else{
				current.next = l1;
				l1 = l1.next;
			}
			current = current.next;
		}
		return dummyHead.next;
	}
}