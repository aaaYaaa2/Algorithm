/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class BinaryTreePath {
    // recursive 
    // with helper 
    /**
     *	Or you can keep the Result as a global variable, 
     *  and the result as a parameter in recursion is not needed 
     */
    public List<String> binaryTreePaths(TreeNode root) {
    	List<String> res = new ArrayList<>();
    	if(root==null) return res;
    	helper(root, res, ""+root.val);
    	return res;
    }

    private void helper(TreeNode root, List<String> result, String subRes){
    	if(root.left==null && root.right==null){
    		result.add(new String(subRes));
    		return;
    	}
    	if(root.left!=null){
    		helper(root.left, result, subRes+"->"+root.left.val);
    	}
    	if(root.right!=null){
    		helper(root.right, result, subRes+"->"+root.right.val);
    	}
    }

    /**
     *	BFS, use two queue
     */

    public List<String> binaryTreePaths2(TreeNode root){
    	List<String> res = new ArrayList<>();
    	Queue<TreeNode> level = new LinkedList<>();
    	Queue<TreeNode> strs = new LinkedList<>();
    	if(root==null) return res;
    	level.offer(root);
    	strs.offer(""+root.val);
    	while(!level.isEmpty()){
    		TreeNode cur = level.poll();
    		String curStr = strs.poll();
    		if(cur.left==null && cur.right==null) res.add(curStr);
    		if(cur.left!=null){
    			level.offer(cur.left);
    			strs.offer(curStr+"->"+cur.left.val);
    		}
    		if(cur.right!=null){
    			level.offer(cur.right);
    			strs.offer(curStr+"->"+cur.right.val);
    		}
    	}
    	return res;
    }

}