# Tree 
---
## Basic Traversal

1. [preorder traversal](./preordertraversal.js)
2. [inorder traversal](./inordertraversal.js)
3. [postorder traversal](./postordertraversal.js)
  
  *Be careful to use while loop, normal iteration could substitute it*
  

## Count Number of Nodes

### Binary Search Tree

1. [kth Smallest Element in BST](./kthsmallestelementinBST.js)

  *use BST property, count nodes in Inorder traversal mode*
  
2. [Lowest Common Ancestor of BST](./lowestcommonancestorofBST.js)

  *use BST property, only need to find node that with p and q in different subtrees*
  
### Complete Tree

1. [Count Complete Tree Nodes](./countcompletetreenodes.js)

   #### Review of Related Tree Concept
   1) full binary tree: a tree in which every node in the tree has either 0 or 2 children
   
   2) complete binary tree: binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible 
   
   *Use Complete Tree property to count the tree level by level, compare left subtree height with right subtree height*
   *When use bit manipulation, add parenthese*
   
---

### Reconstruct Tree

1. [Unique Binary Search Trees II]

[Javascript](../DynamicProgramming/uniquebinarysearchtreeII.js)
[Java](../DynamicProgramming/UniqueBinarySearchTreeII.java)

#### [Symmetric Tree](./Tree/symmetrictree.js)

   *Be careful for some boundary case check*
    
#### [Same Tree](./sametree.js)
    
   *both iterative and recursive approach*
    
#### [Invert Binary Tree](./invertbinarytree.js)

  *iterative approach, invert from top, then we have children that are 'automatically' invert*
  
  keep invert nodes, no need to track size(level)
    
#### [Binary Tree Path](./binarytreepaths.js)

  *Depth First Search*
    


  
