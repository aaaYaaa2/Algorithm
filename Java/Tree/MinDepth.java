public class MinDepth {
    // BFS 
    int min = Integer.MAX_VALUE;
    public int minDepth(TreeNode root) {
        if(root==null) return 0;
        helper(root, 1);
        return min;
    }
    
    private void helper(TreeNode root, int level){
        if(root.left==null && root.right==null){
            min = Math.min(min, level);
            return;
        }
        if(root.left!=null){
            helper(root.left, level+1);
        }
        if(root.right!=null){
            helper(root.right, level+1);
        }
    }

    // DFS
    public int minDepth(TreeNode root){
        if(root==null) return 0;
        int leftDepth = minDepth(root.left);
        int rightDepth = minDepth(root.right);
        return Math.min(leftDepth, rightDepth)+1;
    }
}