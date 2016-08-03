/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class PostOrder{
	// recursive solution to keep a global list variable
	List<Integer> res = new ArrayList<Integer>();
	public List<Integer> postorderTraversalRecur1( TreeNode node ){
		if(node==null) return res;
		postorderTraversalRecur(node.left);
		postorderTraversalRecur(node.right);
		res.add(node.val);
		return res;
	}

	// recursive solution with a void return 
	public void postorderTraversalRecur2( TreeNode node, List<Integer> result){
		if(node==null) return;
		postorderTraversalRecur2(node.left, result);
		postorderTraversalRecur2(node.right, result);
		result.add(node.val);
	}

	// Iterative solution 
	public List<Integer> postorderIterative(TreeNode node){
		Stack<TreeNode> stack = new Stack<>();
		LinkedList<Integer> res = new LinkedList<>();
		if(root==null) return res;

		stack.push(root);
		while(!stack.isEmpty()){
			TreeNode cur = stack.pop();
			res.addFirst(cur.val);
			if(cur.left!=null) stack.push(cur.left);
			if(cur.right!=null) stack.push(cur.right);
		}
		return res;
	}

}