/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class InvertBinaryTree {
    public TreeNode invertTree(TreeNode root) {
        if(root==null) return null;
        TreeNode oldLeft = root.left;
        root.left = inertTree(root.right);
        root.right = invertTree(oldLeft);
        return root;
    }

    // helper
   	public TreeNode invertTree(TreeNode root){
   		if(root==null) return root;
   		invertTree(root);
   		return root;
   	}
    public void invertTreeHelper(TreeNode root){
    	if(root==null) return;
    	TreeNode tmp = root.left;
    	root.left = root.right;
    	root.right = tmp;
    	invertTree2(root.left);
    	invertTree2(root.right);
    }
}