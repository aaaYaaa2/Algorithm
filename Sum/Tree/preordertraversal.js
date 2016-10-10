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
var preorderTraversal = function(root) {
    if(root===null) return [];
    var stack = [], p = root, result=[];
    while(stack.length>0 || p!==null){
        if(p!==null){
            result.push(p.val);
            stack.push(p);
            p = p.left;
        }else{
            var node = stack.pop();
            p = node.right;
        }
    }
    return result;
};