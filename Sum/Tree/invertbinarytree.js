/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 // recursive solution, but since it is recursive, it is not scalable, the stack tend to overflow. 
var invertTree1 = function(root) {
  	if(root===null) return root;
    var tmpNode = root.left;
    root.left = root.right;
    root.right = tmpNode;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// to optimize it to make it more scalable, we can change this to a iterative way, using a stack 

var invertTree2 = function(root) {
    if(root===null) return root;
    var stack = [];
    stack.push(root);
    while(stack.length>0){
        var curRt = stack.pop();
        var tmpLeft = curRt.left;
        curRt.left = curRt.right;
        curRt.right = tmpLeft;
        if(curRt.left!==null) stack.push(curRt.left);
        if(curRt.right!==null) stack.push(curRt.right);
    }
    return root;
};

/*
  and since when we push to stack, the children have already been swapped, so we can change it easily to BFS,
  i.e level order traversal 
*/

var invertTree3 = function(root) {
	if(root===null) return root;
	var queue = [];
	queue.unshift(root);
	while(queue.length>0){
		var curRt = queue.shift();
		var tmpLeft = curRt.left;
		curRt.left = curRt.right;
		curRt.right = tmpLeft;
		if(curRt.left!==null) queue.unshift(curRt.left);
		if(curRt.right!==null) queue.unshift(curRt.right);
	}
	return root;
};