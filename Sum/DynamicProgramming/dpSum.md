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

### Counting Bits

[Javascript](./countingbits.js)

Givenn a non negative integer number num. For every number i in the range 0<= i <=num calculate the number of 1's in their binary representation and return them as an array 

```
    from 2^(n-1) to 2^n, we can compute the number of 1s from number = 2^(n-1) + 1, 2^(n-1) + 2, 2^(n-1) + 3 and so on until we get 2^(n-1)*2, we return 1 at this time. 
```

### Best Time to Buy and Sell Stock with Cooldown

for every transaction day we have three status: buy, sell and cooldown, sell must follow by cooldown 

there are three status, buy sell and coooldown. let `status[i]` to be max profit before day `i` ended with status. So with the three status, we have: 

```
    buy[i] = max(buy[i-1], rest[i-1]-prices);
    sell[i] = max(sell[i-1], buy[i-1]+prices);
    rest[i] = max(rest[i-1], sell[i-1], buy[i-1]);
```

but we know that `rest[i] = sell[i-1]`, so we can omit rest array and make substitution, and we want the final value of sell array 

### Range Sum Query 2D - Immutable

[Javascript](./rangesumquery2d-immutable.js)

common partial sum problem 


### House Robber II

[Javascript](./houserobberII.js)

[Java](./GrayCode.js)

This is similar problem as House Robber I, However, since it is a circle version we need to take consideration of the start point 

for instance, if we have 1 -> 2 -> 3 ->1, if we robbed 1, then it can only be 1->2 participated, if do not rob one, the it can be 2 -> 3 ->1. 

To sum, if rob start at 0 then it will end at nums.length-2, if rob start at 1 and we do not rob 0, then it will ended at nums.length-1. 

  
