// 06/19/2016 
public class FindMin {
	// time limit exceeds 
	public int findMin(int[] nums){
		if(nums==null || nums.length==0) return Integer.MIN_VALUE;
		int start = 0, end = nums.length-1;
		while(nums[end]==nums[start] && end>start){ end--; }
		// the condition where like 5,6,7,0,1,2,5,5,5,5,5,5, i.e 
		// nums[mid] = nums[low] only could be appear in the first time enter 
		// so eliminated this condition  
		while(start<end){
			if(nums[start]<nums[end]) return nums[start];
			int mid = start + (end-start)/2; 
			if(nums[start]>nums[mid]){
				end = mid;
			}else{
				start = mid+1;
			}
		}
		return nums[start];
	}
}