/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var nextIndex = 0, nextInsert = 0;
    for(var i=0; i<nums.length(); i++){
        if(nums[i]!==0){
            nums[nextIndex++] = nums[i];
        }
    }
    for(var j=nextIndex; j<nums.length(); j++){
        nums[j]=0;
    }
};

// actually the second method is slower
// and if start from the front it will be exceeds the time limit 
var moveZeroes = function(nums) {
    for(var i=nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
};

/*
    splice(start, deleteCount[, item1[, item2[, ...]]]);
    splice can perform both delete and add
*/

//-------------Intersection of Two Arrays------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   var collection = new Set();
   var res = [];
   for(var i=0; i<nums1.length; i++){
       if(!collection.has(nums1[i])) collection.add(nums1[i]);
   }// put all unique number into the set 
   
   for(var j=0; j<nums2.length; j++){
       if(collection.has(nums2[j])){
           res.push(nums2[j]);
           collection.delete(nums2[j]);
       }
   }
   return res; 
};

/*
    use Set in javascript, add to add new element and delete to delete the repeat elements 
*/

// -------------- Delete Node in a Linked List -----------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // the node will not be a tail, so node.next will not be null 
    node.val = node.next.val;
    node.next = node.next.next;
};
