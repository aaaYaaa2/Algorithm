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
	

## Subset Problem 

1. [Subset I](./JS/subset1.js)
   
   Given candidate array, without duplicate elements, find all possible subset of the candidate array 

   both recursive and iterative solution 

   Iterative solution: 
	1> don't forget to create a new array subres.slice()
	2> make a temporary array, otherwise, since the array size is keep going, will lead to infinite loop
	
2. [Subset II](./JS/subset2.js)

   Given a collection of integers that might contain duplicates, find all possible unique subset of the candidate array

   Iterative solution, since we cannot add duplicate to previous elements that have already have the element, if we encounter a duplicate, we start from the new level of element. 
   
---

## NQueen

1. [NQueen](./JS/nqueen.js)
   
   for backtrack, we need a way to represent the candidates, a way to generate possible solution, a way to valid and unvalid all solution. 
   
   it is just like combination and subset problem, the difference is just we need to find the condition and candidates by ourselves
   
   current I have the method for non-bit manipulation solution, but quite slow.... 
   
   `arr.join('')`
   
---

## Permutation 

1. [Permutation I](./JS/permutations1.js)
	Given a collection of distinct numbers, return all possible permutations. 
	
	For EVERY POSITION in permutation result, you can put any number that has not appeared in the current result before this index 
	
	`Array.fill(flag, false);`
