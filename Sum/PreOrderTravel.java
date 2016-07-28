/** 
 * Definition for a binary tree node 
 * public class TreeNode {
 *		int val;
 		TreeNode left;
 		TreeNode right;
 		TreeNode(int x) {val = x;}
 * }
 *
 *
 */
public class PreOrderTravel{
	// Recursive Version 
	/** method with a helper **/
	public List<Integer> preorderTraversalRecur(TreeNode root){
		List<Integer> res = new ArrayList<>();
		RecurHelper(root, res);
		return res;
	}
	private void RecurHelper( TreeNode node, List<Integer> result ){
		if(node==null) return;
		result.add(node.val);
		RecurHelper(node.left);
		RecurHelper(node.right);
	}
	/** method with a global variable **/
	List<Integer> result2 = new ArrayList<>();
	public List<Integer> preroderTraversalRecur2(TreeNode root){
		if(root==null) return result2;
		result2.add(root.val);
		preroderTraversalRecur2(node.left);
		preroderTraversalRecur2(node.right);
		return result2;
	}

	// DFS Iterative version
	public List<Integer> iterativePreroder(TreeNode root){
		List<Integer> result = new ArrayList<>();
		if(root==null) return result;

		Stack<TreeNode> stack = new Stack<>();
		stack.push(root);
		while(!stack.isEmpty()){
			TreeNode cur = stack.pop();
			result.add(cur.val);
			if(cur.right!=null) stack.push(cur.right); 
			// since it is using stack, you need to push right child first, then push left child
			// so that when you pop, the left one will add the list first 
			if(cur.left!=null) stack.push(cur.left);
		}
		return result;
	}
}