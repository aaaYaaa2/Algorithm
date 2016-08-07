public class InorderTraversal{
	// Iterative Solution 
	public List<Integer> inorderTraversal(TreeNode root){
		List<Integer> result = new ArrayList<>();
		Stack<TreeNode> stack = new Stack<TreeNode>();
		TreeNode cur = root;

		while(cur!=null || !stack.empty()){
			while(cur!=null){
				stack.add(cur);
				cur = cur.left;
			}
			cur = stack.pop();
			list.add(cur.val);
			cur = cur.right;
		}
		return list;
	}

	
}