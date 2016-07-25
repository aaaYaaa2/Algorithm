/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class BinaryTreeLevelOrderTraversal{
	List<List<Integer>> result = new ArrayList<List<Integer>>();
	public List<List<Integer>> levelOrder(TreeNode root){
		levelHelper(root, 1);
		return result;
	}
	private void levelHelper(TreeNode node, int level){
		if(node==null) return;
		if(level > result.size()){
			result.add(new ArrayList<Integer>());
		}
		result.get(level-1).add(node.val);
		levelHelper(node.left, level+1);
		levelHelper(node.right, level+1);
	}
}