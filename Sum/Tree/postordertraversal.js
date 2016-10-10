/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

// trivial recursive solution 
var postorderTraversal1 = function(root) {
    var res = [];
    if(root===null) return res;
    traverseHelper(root, res);
    return res;
};


function traverseHelper(root, result){
    // base case
    if(root.left===null && root.right===null){
        result.push(root.val);
        return;
    }
    if(root.left!==null) traverseHelper(root.left, result);
    if(root.right!==null) traverseHelper(root.right, result);
    result.push(root.val);
    return;
}

// iterative solution 
// memory exceeds 
var postorderTraversal2 = function(root){
    if(root===null) return [];
    
    // flag is use to track whether the traversal should start from left or right
    var stack = [], res=[], flag = true;
    stack.push(root);
    while(stack.length>0){
        // peek 
        var cur = stack[stack.length-1]; 
        while(cur!==null && flag){
            stack.push(cur.left);
            cur = cur.left;
        }
        // pop the null node 
        if(flag) stack.pop();
        // peek the parent 
        var parent = stack[stack.length-1];
        if(parent.right!==null){
            stack.push(parent.right);
            flag = true;
        }else{
            res.push(parent.val);
            // the subtree finished 
            stack.pop();
            // next we should go the right subtree 
            flag = false;
        }
        // peek the next current element 
        // cur = stack[stack.length-1];
    }
    return res;
};

// a better solution 
/*
    build the traversal from the back 
*/
var postorderTraversal3 = function(root) {
    if(root===null) return [];

    var stack = [], result = [], p = root;
    while(stack.length>0 || p!==null){
        if(p!==null){
            stack.push(p);
            result.unshift(p.val);
            p = p.right;
        }else{
            var node = stack.pop();
            p = node.left;
        }
    }
    return result;
};
