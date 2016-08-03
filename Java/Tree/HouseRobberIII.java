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
    public int rob(TreeNode root) {
     	  if(root==null) return 0;
     	  Max max = robHelper(root);
     	  return Math.max(max.inclusive, max.exclusive);
    }

    public Max robHelper(TreeNode node){
    	if(node==null) return new Max();

    	Max leftVal = robHelper(node.left);
    	Max rightVal = robHelper(node.right);

    	Max result = new Max();
    	result.inclusive = leftVal.exclusive + rightVal.exclusive + node.val;
    	result.exclusive = leftVal.inclusive + rightVal.inclusive;

    	result.inclusive = Math.max(result.inclusive, result,exclusive);
    	return result;
    }

    public class Max{
    	public int inclusive;
    	public int exclusive;
    }
}