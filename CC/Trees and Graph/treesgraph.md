# Graph and Tree

## Concept Review 

1. Depth of a tree: depth of node, number of edges from the node to the tree's root node
2. Height of a node: number of edges on the longest path from the node to a leaf 
3. Dense Graph: a graph in which the number of edges is close to the maximal number of edges. 
4. Sparse Graph: the opposite 
5. indegree and outdegree, for every vertex, if `indegree == outdegree` then it is called `balanced directed graph` 


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

### 4.7 Build Order

You are given a list of projects and a list of dependencies. All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error. 

**This is a problem of Topological Sort**: linearly ordering the vertices in a graph such that for every edge(a, b), a appears before b in the linear order

Recursive, when we encounter a node, we know all the CHILDREN that follow this node 

[Java Implementation](BuildOrder.java)

[Javascript Implementation](buildorder.js)

**method 1: BFS**

```
1. store all parents of a node in a hashmap, `key` is a neighbor of current node, `value` is the count of a parent  
2. find nodes with no parents, put them into a queue, these nodes are our start position 
3. repeat this until the queue is empty: 
	poll a node from queue
	
	reduce parents count of all current node's neighbors, since we visited the current node, the dependencies will be reducing 

	if we find one nodes parents count equal to zero, then offer this node to queue, since it could be a possible start point on next stage 

```

**Note**:
	1. the queue stores the possible start point later, and a `start point` means it has no parents requirement 
	2. According to one, we need the hashmap to keep record of all the parents number of all nodes. 
	3. we only add an element to result if it is a `start point`
	4. This problem is assuming that we always can have a possible order solution 
	5. do not forget to add **ALL** `start point` to queue, since those nodes are all able to visit at this position (i.e we have their requirements satisfied!)

#### [Javascript `Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)


**method 2: DFS**

Keep going deep when we encounter a qualified candidate. 

**Complexity**: for both method, time complexity is O(V+E) and Space Complexity is O(V) 


### 4.8 First Common Ancestor

[Javascript](lowestcommonancestorofbinarytree.js)

Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. 

**NOTE**: This is not necessarily a binary search tree

**Scenario 1**: We do not have pointer to parent in `TreeNode` 

    1. method 1, count node number in left and right subtree
     
    2. method 2, only return node when when found a target or null, time complexity is O(N)

    3. method 3, keep a parent dictionary, similar to TreeNode with a parent pointer, time Complexity is O(d), d is the deeper nodes depth, since there is no parent pointer, we have extra space. 

**Scenario 2**: `TreeNode` has parent pointer, similar with method 3 


### 4.9 BST Sequence 

A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree. 

**Some Thoughts**:
The very first value of the array must be the root value, but relative value of left and right item is not important 
 
So we can weave the array together and keep the relative value of some of its value 

### 4.10 Check Subtree 

T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T2. 

#### method 1: could perform level order traversal to compare node of T1 to root of T2, worst case will have to go O(N), N is the number of nodes in T1

#### method 2: could first compute the height of T2, then go to check node that have height equal to that of T2  















