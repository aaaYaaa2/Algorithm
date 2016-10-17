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

public class Solution{
	/*
		@param a tree node
		@return list of linkedlist 
	*/
	// BFS : level order traversal naive 
	public ArrayList<LinkedList<TreeNode>> listOfDepth1(TreeNode root){
		List<LinkedList<TreeNode>> result = new ArrayList<LinkedList<TreeNode>>();
		if(root==null) return result;

		Queue<TreeNode> queue = new Queue<TreeNode>();
		queue.offer(root);

		while(queue.size()>0){
			LinkedList<TreeNode> temp = new LinkedList<TreeNode>();
			int curSize = queue.size();
			for(int i=0; i<curSize; i++){
				TreeNode cur = queue.poll();
				temp.add(cur);
				if(cur.left!==null) queue.offer(cur.left);
				if(cur.right!==null) queue.offer(cur.right);
			}
			result.add(new LinkedList<TreeNode>(temp));
		}
		return result;
	}

	// Modified, while traveling record the level number 
	public ArrayList<LinkedList<TreeNode>> listOfDepth2(TreeNode root){
		List<LinkedList<TreeNode>> result = new ArrayList<LinkedList<TreeNode>>();
		if(root == null) return result;

		listOfDepthHelper(root, result, 0);
		return result;
	} // Time complexity is O(N);

	private void listOfDepthHelper(TreeNode node, ArrayList<LinkedList<TreeNode>> result, int level){
		if(node == null) return; // base case 

		if(result.size()==level){
			// we encounter a new level 
			LinkedList<TreeNode> newLevel = new LinkedList<TreeNode>();
			newLevel.add(node);
			result.add(newLevel);
		}else{
			LinkedList<TreeNode> curLevel = result.get(level);
			curLevel.add(node);
		}
		listOfDepthHelper(node.left, result, level+1);
		listOfDepthHelper(node.right, result, level+1);
	}
}