public class RemoveNodeWithV{
	public ListNode removeElements(ListNode head, int val){
		// for the case where the several node at the begining is to be deleted 1
		while(head!=null && head.val==val) head = head.next;
		ListNode curr = head;
		// you delete the node use node.next = node.next.next;
		// no need to keep two pointer 
		while(curr!=null && curr.next!=null){
			if(curr.next.val == val) {
				curr.next = curr.next.next;
			}else{
				curr = curr.next;
			}
		}
		return head;
	}
}