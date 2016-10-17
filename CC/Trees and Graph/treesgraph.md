# Graph and Tree

## Concept Review 

1. Depth of a tree: depth of node, number of edges from the node to the tree's root node
2. Height of a node: number of edges on the longest path from the node to a leaf 
3. Dense Graph: a graph in which the number of edges is close to the maximal number of edges. 
4. Sparse Graph: the opposite 

### [4.1 Route Between Nodes](RouteBetweenNodes.java)

Given a directed graph, design an algorithm to find out whether there is a route between two nodes

**Note**: when add a node's neighors, check if it is visited first, if it is visted before we skip this node, this is to avoid cyclic 

For Both DFS amd BFS method, in each node, we need to do O(V+E) oporations. 

Tradeoff between DFS and BFS

### [4.2 Minimal Tree](minimaltree.java)
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

**Note**: it should be front>end not front>=end, in the equal case, we still have a node to compute 


### [4.3 List of Depth](ListOfDepth.java)

Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g, if you have a tree with depth D, you will have D linked list)

**Method 1**: to use naive Breadth First Search, Time complexity is O(N), no extra space needed

**Method 2**: to use Recursive level calls, Time complexity is also O(N), but we need to use O(lg(N)) stack space, since we have O(lg(N)) recursive calls 

### 4.4 Check Balanced: already did it before

### [4.5 Validate BST](ValidBST.java)

Implement a function to check if a binary tree is a binary search tree 

The trick here, is the BST property, while we know `left < parent < right`, we also need to remember that all nodes on left subtree will be smaller than its parent, all nodes on right subtree will be larger than its parent so we need to keep a record of previous parent also 

And we need to take into consideration the case when numbers will overflow, so we need a long not a int in Java 

Second method is to use in-order traversal and store the node value in an array to and check if the array is well sorted 

### [4.6 Successor](inordersuccessorinBST.java)

Write an algorithm to find the "next" node (i.e inorder successor) of a given node in a binary search tree. You may assume that each node has a link to its parent 

1. if(p.val > root.val) then we go to the right child of root element,
2. if(p.val < root.val) then we store the current root, since we do not know if the right subtree of current root's left child is has elements larger than p.val, then it will repeat the process 







