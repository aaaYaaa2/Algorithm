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
 // iterative appraoch, reduce the while loop 
var inorderTraversal = function(root) {
    var stack = [], res = [], cur=root;
    while(stack.length>0 || cur!==null){
        // no need the while loop here 
        if(cur!==null){
            stack.push(cur);
            cur = cur.left;
        }else{
            var node = stack.pop();
            res.push(node.val);
            cur = node.right;
        }
    }
    return res;
};