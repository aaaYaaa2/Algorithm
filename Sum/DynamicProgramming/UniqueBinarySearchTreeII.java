/*
	Definition for a binary tree node
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
*/

public class Solution {
	public List<TreeNode> generateTrees(int n){
		List<TreeNode> [] result = new List[n+1];
		result[0] = new ArrayList<TreeNode>();
		if(n==0) return result[0];
		
		result[0].add(null);
		for(int len=1; len<=n; len++){
			result[len] = new ArrayList<TreeNode>();
			for (int j=0; j<len; j++){
				for(TreeNode nodeLeft : result[j]){
					for(TreeNode nodeRight : result[len-j-i]){
						var newRt = new TreeNode(j+1);
						newRt.left = nodeLeft;
						newRt.right = deepCopy(j+1, nodeRight);
						result[len].add(newRt);
					}
				}
			}
		}
		return result[n];
	}

	private TreeNode deepCopy(int offset, TreeNode node){
		if(node==null) return null;
		TreeNode newRt = new TreeNode(node.val + offset);
		newRt.left = deepCopy(offset, node.left);
		newRt.right = deepCopy(offset, node.right);
		return newRt;
	}
}