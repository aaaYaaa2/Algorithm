public class Solution {
	// divide and conquer using memory 
	/*
	We observe that 
	*/
	public int maxCoin(int[] nums){
		// expand the array to start with 1 and end 1 
		int[] newNum = new int[nums.length+2];
		int n=1;
		for(int i=0; i<nums.length; i++){
			if(nums[i]==0) continue; // skip 0 since it will not increase our coins 
			newNum[n++] = nums[i];
		}
		newNum[0]=1;
		newNum[n]=1;

		int[][] memory = new int[n+1][n+1]; // keep a memory for the sum of left to right range 
		return dcHelper(memory, newNum, 0, n);
	}

	private int dcHelper(int[][] memory, int[] newNums, int left, int right){
		if(right-left==1) return 0;
		if(memory[left][right]>0) return memory[left][right];
		int ans = 0;
		for(int k=left+1; k<right; k++){
			ans = Math.max(ans, newNums[k]*newNums[left]*newNums[right]+
				dcHelper(memory, newNums, left, k) + dcHelper(memory, newNums, k, right));
			// fix the boolean that will be burst in the last moment, use it to divide the array into 
			// two parts 
		}
		memory[left][right] = ans;
		return ans;
	}

	// DP solution 
	public int maxCoin2(int[] nums){
		int[] newNum = new int[nums.length+2];
		int n=1;
		for(int i=0; i<nums.length; i++){
			if(nums[i]==0) continue; // skip 0 since it will not increase our coins 
			newNum[n++] = nums[i];
		}
		newNum[0]=1;
		newNum[n]=1;

		int[][] dp = new int[n+1][n+1];
		for(int k=2; k<n; k++){ // all possible combination number
			for(int left=0; left<n-k; left++){
				int right = left + k;// set the left and right boundary
				for(int i=left+1; i<right; i++){
					dp[left][right] = Math.max(dp[left][right],
						newNums[left]*newNums[i]*newNums[right] + dp[left][i] 
						+ dp[i][right]);
					// get the maximum value within this boundary
				}
			}
		}
		return dp[0][n];
	}
}