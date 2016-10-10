/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // for null root or does not exist case 
    if(root===null) return null;
    // find the taget
    if((root.val>=p.val && root.val<=q.val) || (root.val<=p.val && root.val>=q.val)) return root;
    if(root.val>p.val && root.val>q.val) return lowestCommonAncestor(root.left, p, q);
    if(root.val<p.val && root.val<q.val) return lowestCommonAncestor(root.right, p, q);
};

