# Backtrack
---

## Combination Sum 

1. [Combination Sum 1](./JS/combinationsum1.js)
  
  Given a target value T, candidates C that may contain duplicates [check for candidates value and previous candidate value]
  
  Assume: we can use same element in C for several time [start from i not from i+1]
  
  `res.push(subres.slice())` for javascript to make a new array for subres. 
  
2. [Combination Sum 2](./JS/combinationsum2.js)

  Given a target value T, candidates C that may contain duplicates [check for candidates value and previous candidate value, keep a flag array]
  
  Assume: we can only use each element in C for once
  
3. [Combination Sum 3](./JS/combinationsum3.js)

  Given a target value T, number of required elements K, from 1 to 9, find all unique K elements that sums to T 
  
  we don't need the candidates array, only need to add the index directly, since the index in for loop represent the elements in candidates already 

4. [Combination Sum 4(Binary Watch)](./JS/binarywatch.js)

  the sub problem is a combination sum, Given candidates without duplicates, return possible sum value
  
  Note if the input change, the sum value may contain duplicates
  
  given elements number k, 
	candidates without duplicate 
	find possible sum result 
