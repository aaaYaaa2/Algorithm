public class RemoveDuplicates{
	public ListNode deleteDuplicates(ListNode head){
		// if list is empty or only contain one node 
		if(head==null || head.next==null) return head;
		ListNode cur = head;
		while(cur!=null && cur.next!=null){
			if(cur.val < cur.next.val){
				cur = cur.next;
			}else{
				cur.next = cur.next.next;
			}
		}
		return head;
	}
}