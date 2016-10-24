
//	Definition for a binary tree node
	function TreeNode(val){
		this.val = val;
		this.left = this.right = null;
	}

/*
	@param {number} n
	@return {TreeNode[]}
*/

var generateTrees = function(n){
	var result = [];
	result[0] = [];
	if(n===0) return result[0];
	result[0].push(null);

	for(var i=1; i<=n; i++){
		// number of current total nodes 
		result[i] = [];
		for(var j=0; j<i; j++){
			// j is the current root 
			for(var k=0; k<result[j].length; k++){
				// result[j] contains all left subtree has size j 
				for(var m=0; m<result[i-j-1].length; m++){
					// m is total number of previous tree that has size i-j-1
					var root = new TreeNode(j+1); 
					root.left = result[j][k];
					// right subtree root is j+1 and has size i-j-1
					root.right = deepCopy(j+1, result[i-j-1][m]);
					result[i].push(root);
				}
			}
		}
	}
	return result.pop();
};

/* 
	the right side structure is the same as left side, except the value of 
	node is shift by a certain number, so we perform deepCopy on each node 
*/
function deepCopy(offset, node){
	if(node==null) return null;
	// add the offset 
	var newNode = new TreeNode(node.val + offset);
	newNode.left = deepCopy(offset, node.left);
	newNode.right = deepCopy(offset, node.right);
	return newNode;
}

console.log(generateTrees(2));


