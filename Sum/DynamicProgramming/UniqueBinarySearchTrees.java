public class Solution {
	public int numTrees(int n){
		int[] dp = new int[n+1];
		dp[0] = dp[1] = 1;
		for(int k=2; k<=n; k++){
			for(int i=0; i<k; i++){
				dp[k]+=dp[i]*dp[k-i-1];
			}
		}
		return dp[n];
	}
}