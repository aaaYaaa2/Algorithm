# Binary Search

Be careful to use while loop in binary seach check, it will not improve the performance most of the time

### [Longest Increaseing Subsequence](./longestincreasingsubsequence.js)

Three solution, hashtable brute force(O(n*n))

Starting from the back, since if we know length at current step, the largest length depends on the length available after that position, Complexity is still O(N*N)

[Magic Tail Solution](https://discuss.leetcode.com/topic/28738/java-python-binary-search-o-nlogn-time-with-explanation/8)

