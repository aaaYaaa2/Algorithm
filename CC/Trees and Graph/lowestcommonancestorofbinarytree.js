/* Definition of a Binary Tree */
function TreeNode(val){
	this.val = val;
	this.left = this.right = null;
}

// method 1
// count node number idea 
var commonLowestAncestor = function(root, p, q){
	if(root === null || root===p || root===q) return root;
	var leftNum = getNodeNumber(root.left, p, q);
	var rightNum = getNodeNumber(root.right, p, q);

	if(leftNum === 2){
		commonLowestAncestor(root.left, p, q);
	}else if(rightNum === 2){
		commonLowestAncestor(root.right, p, q);
	}else{
		return root;
	}
};

function getNodeNumber(node, p, q){
	if(node === null){ 
		return 0;
	}else if(node === p || node===q ){
		return 1 + getNodeNumber(node.left, p, q) + getNodeNumber(node.right, p, q);
	}else{
		return getNodeNumber(node.left, p, q) + getNodeNumber(node.right, p, q);
	} 
}

// method 2

var commonLowestAncestor = function(root, p, q){
	if(root===null || root===p || root===q) return root;

	// only return if we find a target node or we did not find anything 
	var left = commonLowestAncestor(root.left, p, q);
	var right = commonLowestAncestor(root.right, p, q);

	if(left!==null && right!==null) return root;
	return left===null? right : left;
};

// method 3
// iterative method 
// use a parent dictionary
var commonLowestAncestor2 = function(root, p, q){
	var parentMap = new Map();
	parentMap.set(root, null);
	var stack = [];

	stack.push(root);
	while(!parentMap.has(p) || !parentMap.has(q)){
		var cur = stack.pop();
		if(cur.left!==null){
			parentMap.set(cur.left, cur);
			stack.push(cur.left);
		}
		if(cur.right!==null){
			parentMap.set(cur.right, cur);
			stack.push(cur.right);
		}
	}

	var ancestorSet = new Set();
	while(p!==null){
		ancestor.add(p);
		p = parentMap.get(p);
	}

	while(!ancestorSet.has(q)){
		q = parentMap.get(q);
	}
}; // time complexity O(N)

// Conditions when we have pointer to parent in node definition 

function TreeNodeWithParent(val){
	this.val = val;
	this.left = this.right = this.parent = null;
}

// Same idea as above method 
var lowestCommonAncestor = function(root, p, q){
	if(root === null || p === null || q === null) return null;

	var parentSet = {};
	// get all ancestors of p 
	while(p!==null) {
		parentSet.add(p);
		p = p.parent;
	}

	while(!parentSet.has(q)) q = q.parent;
	return q;
}; // Time Complexity is O(d) d is the depth of lower node 
