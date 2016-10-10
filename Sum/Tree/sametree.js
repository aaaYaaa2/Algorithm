/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    if(p===null || q===null) return false;
    if(p.val!==q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// breadth first appraoch
var isSameTree2 = function(p, q) {
	if(p===null && q===null) return true;
    if(p===null || q===null) return false;
    if(p.val!==q.val) return false;
    
    var queue1 = [], queue2=[];
    queue1.push(p); queue2.push(q);
    while(queue1.length>0 && queue2.length>0){
        var curNd1 = queue1.shift(), curNd2 = queue2.shift();
        if(curNd1.val===curNd2.val){
            // add their children 
            if(!addNodes(queue1, queue2, curNd1.left, curNd2.left) || !addNodes(queue1, queue2, curNd1.right, curNd2.right)){
                return false;
            }
        }else{
            return false;
        }
    }
    return true;
};

function addNodes(queue1, queue2, node1, node2){
    if(node1===null && node2===null){
        return true;
    }else if((node1===null)||(node2===null)){
        return false;   
    }else{
        queue1.push(node1);
        queue2.push(node2);
        return true;
    }
}

