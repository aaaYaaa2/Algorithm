/* Definition of a Tree with pointer to parent */

function TreeNodeWithPr(val){
	this.val = val;
	this.right = this.left = this.parent = null;
}

/*
	@param node: input node 
	@return next: node to travel next 
*/

// if given only the treenode 
var nextNode = function(node){
	// corner case 
	if(node === null) return null;

	if(node.right!==null){
		var right = node.right;
		// keep going left, inorder 
		while(right.left!==null) right = right.left;
		return right;
	}else{
		// if the node has no right child, return to parent 
		// handling root with no right child 
		if(node.parent === null) return null; 

		var parent = node.parent;
		if(parent.left === node){
			// if the current is a left child of its parent 
			return parent;
		}else{
			// if current node is a right child of its parent 
			while(parent !== null && parent.right === node){
				// track to the node where has the right subtree untraveled 
				// or it is the last node of the tree, return null 
				node = parent;
				parent = node.parent; 
			}
			return parent;
		}
	}
};

// if we were given the tree 
var nextNode2 = function(root, node){
	if(root === null || node === null) return null;

	var lastLarger = null;

	while(root!==null){
		if(p.val < root.val){
			lastLarger = root;
			root = root.left;
		}else{
			root = root.right;
		}
	}
	return lastLarger;
};