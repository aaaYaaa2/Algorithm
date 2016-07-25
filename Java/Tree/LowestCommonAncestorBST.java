/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class lowestCommonAncestor {
	// recursive 
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
       if(root==null) return null;
       if(p.val<root.val && q.val<root.val){
       		return lowestCommonAncestor(root.left, p, q);
       }
       else if(p.val>root.val && q.val>root.val){
       		return lowestCommonAncestor(root.right, p, q);
       }
       else{
       		return root;
       }
    }

    // non-recursive 
    public TreeNode lowestCommonAncestor2(TreeNode root, TreeNode p, TreeNode q){
    	while(true){
    		if(root.val > p.val && root.val > q.val){
    			root = root.left;
    		}else if (root.val < p.val && root.val < q.val){
    			root = root.right;
    		}else{
    			return root; 
    		}
    	}
    }
}