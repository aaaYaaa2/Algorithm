/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
	// the solution to count the number of targets in each subtree, 
	// and then compare and then use TreeNode 
	// time complexity is O(n^2) since for every node, almost, we need to count again 
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root==null) return root;
        if(countNode(root.left)==1 && countNode(root.right)==1) return root;
        if(countNode(root.left)==2) return lowestCommonAncestor(root.left, p, q);
        if(countNode(root.right)==2) return lowestCommonAncestor(root.right, p, q);
        if((root==q || root==p) && (counNode(root.left)==1 || countNode(root.right)==1)) 
        	return root;
    }

    private int countNode(TreeNode root, TreeNode p, TreeNode q){
    	if(root!=p && root!=q) return 0;
    	if(root==p || root==q) {
    		return countNode(root.left) + countNode(root.right) + 1;
    	}
    	return counNode(root.left) + counNode(root.right);
    }

    // more concise 
    // time complexity is O(N) since it is a simple traversal 
    // the traversal is preorder , parents first and then two children 
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q){
    	if(root==null) return null;
    	if(root==p || root==q) return root;
    	TreeNode left = lowestCommonAncestor(root.left, p, q);
    	TreeNode right = lowestCommonAncestor(root.right, p, q);
    	return (left!=null && right!=null)? root : right==null? left : right;
    }

    // iterative solution 
    
}