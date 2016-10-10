/*
	Count Complete Tree Nodes
*/

/*
	@param {TreeNode} root
	@return {number}
*/

function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}
// use level order traversal to count the nodes 
// don't forget to check if the root is empty or not 
var countNodes1 = function(root) {
	// count the level of tree first
	if(root===null) return 0;
	var res = 1, queue = [];
	queue.push(root);
	// use level order traversal 
	while(queue.length!==0){
		var tmpLen = queue.length;
		for(var i=0; i<tmpLen; i++){
			var cur = queue.shift();
			if(cur.left!==null) {
				queue.push(cur.left);
				res++;
			}
			if(cur.right!==null) {
				queue.push(cur.right);
				res++;
			}
		}
	}
	return res;
};// Time Complexity O(n), n is the number of tree nodes in the tree 

// method 2 use count nodes of left and right tree then compare method, Worst Time Complexity is still O(N) 
// but for general situation it is faster than the previous one 
var countNodes2 = function(root) {
	if(root===null) return 0;
	var leftHt = getLeftHeight(root);
	var rightHt = getRightHeight(root);

	if(leftHt === rightHt) {
		// total nodes is 2^level - 1 
		// when use bit operation, use brackets !!! 
		return (1<<leftHt) - 1;
	}else{
		return countNodes2(root.left) + countNodes2(root.right) + 1;
	}
};

function getLeftHeight(node){
	var num = 0;
	while(node!==null){
		num++;
		node = node.left;
	}
	return num;
}

function getRightHeight(node){
	var num = 0;
	while(node!==null){
		num++;
		node = node.right;
	}
	return num;
}

// optimize, instead of two function to count Left and Right nodes, we can use a flag to keep record 
function getHeight(node, flag){
	var num = 0;
	if(flag){
		// left case
		while(node!==null){
			num++;
			node = node.left;
		}
	}else{
		// right case
		while(node!==null){
			num++;
			node = node.right;
		}
	}
	return num;
}

