// solution1 is to use the linked list cycle II idea 

public class Solution {
	public int findDuplicate(int[] nums){
		if(nums.length>1){
			int slow = nums[0];
			int fast = nums[nums[0]];
			while(slow!=fast){
				slow = nums[slow];
				fast = nums[nums[slow]];
			} // slow and fast are travel at different speed 

			fast = 0;
			while(fast!=slow){
				fast = nums[fast];
				slow = nums[slow];
			}
			return slow;
		}
		return -1;
	}


// another solution is for binary search 
	public int findDuplicate2(int[] nums){
		int low = 1, high = nums.length;

		while(low<high){
			int mid = low + (high-low)/2;
			int count = 0;
			for(int n : nums){
				if(n<=mid) count++;
			}
			if(count>mid){
				high = mid;
			}else{
				low = mid+1;
			}
		}
		return low;
	}
}