public class LinkedListToBST {
	public TreeNode sortedListToBST(ListNode head){
		return  helper(head);
	}

	private TreeNode helper(ListNode head, List tail){
		// handle the situation where the node only have one head 
		if(head==null || head==tail) return head;
		if(head.next == tail) return new TreeNode(head.val);

		ListNode fast = head;
		ListNode slow = head;
		// set the root to the right place 
		while(fast!=tail && fast.next!=tail){
			fast = fast.next.next;
			slow = slow.next;
		}
		// split the list into two parts, first part from head to slow
		// second part from slow.next to tail 
		TreeNode root = new TreeNode(slow.val);
		root.left = helper(head, slow);
		root.right = helper(slow.next, tail);
		return root;
	}
}