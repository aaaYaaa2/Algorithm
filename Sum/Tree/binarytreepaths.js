/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root===null) return [];
    var finalRes = [];
    pathHelper(root, '', finalRes);
    return finalRes;
};

function pathHelper(node, subres, res){
    // we encounter a leaf node now 
    if(node.left===null && node.right===null){
        res.push(subres + node.val);
        return;
    }
    subres+=(node.val + '->');
    // DFS 
    if(node.left!==null) pathHelper(node.left, subres, res);
    if(node.right!==null) pathHelper(node.right, subres, res);
    return;
}