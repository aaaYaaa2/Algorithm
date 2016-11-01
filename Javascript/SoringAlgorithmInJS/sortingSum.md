# Basic Sorting Algorithm in Javascript 

## 1. Bubble Sort

### General Step:

1) Compare adjacent elements in array, if `arr[i] > arr[i+1]` then swap them, after this, the last item is the largest element in current unsorted elements 

2) to all elements repeat step 1, except the last element 

3) repeat the process until all elements are sorted 

### Improved I:

we can keep a record of last swapped position, since after the last swap, all elements behind the position are sorted already, we did not need to traverse those elements again. 

### Improved II:

we can use 2 pointer, one start swap from the start and another one start swap from end, so that the element we need to swap 

[Javascipt Bubble](./bubble.js)

<div style="text-align: center;" >
    <img src="../../PIC/bubblesort.png" alt="bubblesort time" />
</div>

>  Bubble sort is a in-place sorting method, Time complexity is O(n^2) 

## Selection Sort

travel through the array and find the smallest/largest in unsorted part, and swap with the next sorted position

[Javascript Selection Sort](./selectionsort.js)

> Time Complexity is O(n^2), in-place


## Insertion Sort

travel through the array, assume first element is already sorted, insert the second element, if the second element is smaller than the sorted element, shift the sorted element back. repeat the process until we reach the end of array 

### Improved Insertion Sort I 

when insert new element, use binary search to improve 


## Shell Sort 

For different gaps, perform insertion sort for subarrays with gaps, the last gap needs to be 1. 

[Javascript Shell Sort](./shellsort.js) 

> Time Complexity O(nlgn), in-place sort 


## Merge Sort 

A typical Divide and Conquer Approach 

[Javascript Merge Sort](./mergesort.js)

> Time complexity analysis: best case O(N) already sorted, worst case:  


## Quick Sort

decide a pivot each time and divide the array into two parts by the pivot, until each part is been sorted 

[Javascript Quick Sort](./quicksort.js)

> Time Complexity: best case, average case are O(nlogn) and worst case is O(n^2), when every time you choose a extreme value for unsorted part 




