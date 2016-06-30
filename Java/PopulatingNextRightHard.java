/**
*	Definition for binary tree with next pointer 
	public class TreeLinkNode {
		int val;
		TreeLinkNode left, right, next;
		TreeLinkNode(int x) { val = x; }
	}
*/

public class Solution {
	// naive approach use O(N) space O(N) time complexity
	// AC passed  
	public void connect(TreeLinkNode root) {
		if(root==null) return;
		Queue<TreeLinkNode> queue = new LinkedList<>();
		root.next = null;
		queue.offer(root);
		
		while(!queue.empty()){
			int size = queue.size();
			TreeLinkNode cur = queue.poll();
			for(int i=0; i<size; i++){
				if(cur.left!=null) queue.offer(cur.left);
				if(cur.right!=null) queue.offer(cur.right);
				// push new elements in next level to the queue 
				if(i==size-1){
					cur.next = null;
				}else{
					TreeLinkNode next = queue.poll();
					cur.next = next;
					cur = next;
				}
				// set the next pointer 
			}
		}
	}

	public void connect2(TreeLinkNode root){
		if(root==null) return;
		TreeLinkNode dummyHead = new TreeLinkNode(0);
		TreeLinkNode pre = dummyHead;
		while(root!=null){
			if(root.left!=null){
				pre.next = root.left;
				// let the dummyhead to be the new start for the next line 
				pre = pre.next;
			}
			if(root.right!=null){
				pre.next = root.right;
				per = pre.next;
			}
			root = root.next;
			if(root==null){
				pre = dummyHead;
				root = dummyHead.next; 
				//!!
				// since the dummyHead.next has been set to the first element of next level
				// look at the last commented place 
				dummyHead.next = null;
				// set next to null, so that a new level starts 
			}
		}
	}
}