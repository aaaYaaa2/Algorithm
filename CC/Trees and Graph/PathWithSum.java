// Definition of TreeNode
// public class TreeNode {
// 	public int val;
// 	public TreeNode left, right;
// 	public TreeNode(int val){
// 		this.val = val;
// 		this.left = this.right = null;
// 	}
// }

public PathWithSum {
	public int pathWithSum(TreeNode node, int target){
		if(node==null) return target==0;
		int res = 0;
		pathHelper(node, target, res, new LinkeList<TreeNode>());
		return res;
	}

	private void pathHelper(TreeNode node, int sum, int count, Queue<TreeNode> temp){
		if(sum == 0) {
			count++;
			return;
		} 
		if(node.val > sum){
			int tmp = temp.removeFirst();
			pathHelper(node, sum-tmp.val, count, temp);
		}else{
			temp.addLast(node);
			if(node.left!=null) pathHelper(node.left, sum-node.val, count, temp);
			if(node.right!=null) pathHelper(node.right, sum-node.val, count, temp);
		}
	} // O(N)

	int countPathWithSum(TreeNode root, int targetSum){
		return countPathWithSum(root, targetSum, 0, new HashMap<Integer, Integer>());
	} 

	int countPathWithSum(TreeNode node, int targetSum, int runningSum, HashMap<Integer, Integer> pathCount){
		if(node == null) return 0; // Base case
		// Count paths with sum ending at the current node 
		runningSum+=node.data;
		int sum = runningSum - targetSum;
		int totalPaths = pathCount.getOrDefault(sum, 0);

		// If running Sum equals targetSum, then one additional path starts at root, add in this path
		if(runningSum == targetSum){
			totalPaths++;
		}

		// Increment pathCount, rescue, then decrement pathCount 
		incrementHashTable(pathCount, runningSum, 1); 
		totalPaths += countPathWithSum(node.left, targetSum, runningSum, pathCount);
		totalPaths += countPathWithSum(node.right, targetSum, runningSum, pathCount);
		incrementHashTable(pathCount, runningSum, -1); 

		return totalPaths;
	}

	void incrementHashTable(HashMap<Integer, Integer> hashTable, int key, int delta){
		int newCount = hashTable.getOrDefault(key, 0) + delta;
		if(newCount == 0){
			hashTable.remove();
		}else{
			hashTable.put(key, newCount);
		}
	}
}