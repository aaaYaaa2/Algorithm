/** Definition for singly-linked list.
	public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val=x; }
	}
*/
// Insertion Sort 
public class InsertionSortList {
	public ListNode insertionSortList(ListNode head) {
		if(head==null) return head;
		ListNode newHd = new ListNode(0);
		ListNode cur = head;
		ListNode pre = newHd;
		ListNode next = null;

		while(cur != null){
			// keep a record of the next element to iterate through 
			next = cur.next;
			// everytime we iterate from the start of newHd. 
			while(pre.next != null && pre.next.val < cur.val){
				pre = pre.next;
			}
			cur.next = pre.next;
			pre.next = cur;
			pre = newHd;
			cur = next;
		}
		return newHd.next;
	}
}