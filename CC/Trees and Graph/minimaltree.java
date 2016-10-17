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
     * @param A: an integer array
     * @return: a tree node
     */
    public TreeNode sortedArrayToBST(int[] A) {  
        // write your code here
        // corner case 
        if(A==null || A.length==0) return null;
        return nodeGenerator(0, A.length-1, A);
    }  
    
    // node generator
    /**
     * @param int: front
     * @param int: end
     * @return TreeNode;
    */
    private TreeNode nodeGenerator(int front, int end, int[] A){
        if(front>end) return null;
        
        int rootIdx = (front+end)/2;
        TreeNode root = new TreeNode(A[rootIdx]);
        root.left = nodeGenerator(front, rootIdx-1, A);
        root.right = nodeGenerator(rootIdx+1, end, A);
        return root;
    }
}