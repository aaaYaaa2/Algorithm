/*
	Kth Smallest Element in a BST 
*/

// count the node number that is smaller than current node 

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/*
	@param {TreeNode} root
	@param {number} k
	@return {number}
*/

var kthSmallest = function(root, k){
	// if the root is null then we cannot find the correct node 
	if(root===null) return -1;
	var stack = [];
	while(root!==null){
		stack.push(root);
		root = root.left;
	}
	// count number
	while(k>0){
		k--;
		var curNode = stack.pop();
		if(k===0) return curNode.val;
		var right = curNode.right; 
		while(right!==null){
			stack.push(right);
			right = right.left;
		}
	}
	// not found 
	return -1;
};