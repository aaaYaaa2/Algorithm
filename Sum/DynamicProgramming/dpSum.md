# Dynamic Programming 

---

## Some thoughs

What is the current situation/result depends on -> make the step clear out
Dynamic Programming usually require more space complexity compare to other method

## Applied in Design

1. [Range Sum Query](./rangesumqueryimmutable.js)

  *the query will be called many times and we need a way to access the result quicker*
  
## Reduce Space useage 

1. [Maximum Square](./maximumsquare.js)

---

### [House Robber](./houserobber.js)
  
  *current satus depends on previous include or exclude, and its own status has include and exlclude*
  
### [Climbing Stairs](./climbingstairs.js)

  *how do we reach current step, from previous several conditions*

### [Coin Change](./coinchange.js)

  We reach the current amount by add rest of amount in addition to some coins, we can use duplicate coins 

### Unique Binary Search Trees II

[Javascript](./uniquebinarysearchtreeII.js)
[Java](./UniqueBinarySearchTreeII.java)

Perform Dynamic Programming on the size of tree 

Left Subtree and Right Subtree has no difference if they have the same size, so we could perform deep copy to subtrees that have same size, and shift the number 

be careful to set `result[0].push(null)`

### Unique Binary Search Tree 

[JavaScript](./uniquebinarysearchtreesII.js)
[Java](./UniqueBinaryTrees.java)


  
