/*
	Definition for a binary tree 
*/

function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}

/*
	@param {TreeNode} root
	@return {boolean}
*/

var isSymmetric = function(root) {
	if(root===null) return true;
    return symmetricHelper(root.left, root.right);
};

function symmetricHelper(node1, node2){
    if(node1===null && node2===null) return true;
    if(node1===null || node2===null) return false; // not symmetric 
    if(node1.val!==node2.val) return false; 
    return symmetricHelper(node1.left, node2.right) && symmetricHelper(node1.right, node2.left);
}

