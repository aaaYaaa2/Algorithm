/**
 *	Definition for a binary tree node.
 *	public class TreeNode {
 		int val;
 		TreeNode left;
 		TreeNode right;
 		TreeNode(int x) { val = x; }
 	}
 *
 */

public class PostOrderTraversal{
	public List<Integer> postOrderTraversal(TreeNode root){
		// stack to keep track of parent
		LinkedList<Integer> res = new LinkedList<>(); 
		if(root==null) return res;
		Stack<TreeNode> stack = new Stack<>();
		stack.push(root);
		while(!stack.isEmpty()){
			TreeNode cur = stack.pop();
			res.addFirst(cur.val);
			if(cur.left!=null){
				stack.push(cur.left);
			}
			if(cur.right!=null){
				stack.push(cur.right);
			}
		}
		return res;
	}

}