package AlgoFolder;

public class WiggleMaxLength {
	public static int wiggleMaxLength(int[] nums){
		if(nums==null) return 0;
		if(nums.length<2) return nums.length;
		// find the first increase/decrease point
		int i=1;
		while(i<nums.length && nums[i]==nums[i-1]) i++;
		if(i==nums.length) return 1;
		int maxLen = 2;
		boolean increase = (nums[i]>nums[i-1]? true : false);
		for(int k=i+1; k<nums.length; k++){
			if(increase && nums[k]<nums[k-1]){
				increase = !increase;
				maxLen++;
			}else if(!increase && nums[k]>nums[k-1]){
				increase = !increase;
				maxLen++;
			}
		}
		return maxLen;
	}
	
	public static void main(String[] args){
		int[] input = {1,1,1,2,3,4,4,5,3,1};
		int result = wiggleMaxLength(input);
		System.out.println(result);
	}
}