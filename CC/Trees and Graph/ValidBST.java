/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */
public class Solution {
    /**
     * @param root: The root of binary tree.
     * @return: True if the binary tree is BST, or false
     */
    public boolean isValidBST(TreeNode root) {
        // write your code here
        if(root==null) return true; // base case
        return isValidBSTHelper(root, Long.MAX_VALUE, Long.MIN_VALUE);
        
    }
    
    private boolean isValidBSTHelper(TreeNode node, long maxVal, long minVal){
        if(node==null) return true; // base case
        
        if(node.val<=minVal || node.val>=maxVal) return false;
        boolean left = isValidBSTHelper(node.left, (long)node.val ,minVal);
        boolean right = isValidBSTHelper(node.right, maxVal, (long)node.val);
        return left && right; 
    }

    // in-order traversal and check if the array is sorted or not 
    public boolean isValidBST(TreeNode root){
        List<Integer> arr = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode p = root;
        while(!stack.empty() || p!=null){
            if(p!=null){
                stack.push(p);
                p = p.left;
            }else{
                TreeNode cur = stack.pop();
                arr.add(cur.val);
                p = cur.right;
            }
        }

        for(int i=1; i<arr.size(); i++){
            if(arr.get(i) < arr.get(i-1)) return false;
        }
        return true;
    }
}