/**
 *	Definition for singly-linked list.
 *  public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) {val = x;}
 	}
 *
 */

// delete a node in a singly linked list, given only that node to be deleted 
 public class Solution {
 	public void deleteNode(ListNode node){
 		node.val = node.next.val; // switch the node value to next 
 		node.next = node.next.next; // skip the next node. 
 	}
 }