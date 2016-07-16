public class EditDistance {
	// 2D array version 
	// Dynamic programming 
	public int minDistance(String word1, String word2){
		// dp[i][j] represent the least distance between word1[0,i] to word2[0,j]; 
		// then we perform further actions depends on the value of i,j 
		int[][] dp = new int[word1.length()+1][word2.length()+1];
		// we need to initialize the boundary 
		for(int k=0; k<=word1.length(); k++){
			dp[k][0] = k;
		}
		for(int l=0; l<=word2.length(); l++){
			dp[0][l] = l;
		}
		for(int i=1; i<=word1.length(); i++){
			for(int j=1; j<=word2.length(); j++){
				if(word1.charAt(i-1)==word2.charAt(j-1)){
					dp[i][j] = dp[i-1][j-1];
				}else{
					dp[i][j] = Math.min(Math.min(dp[i-1][j-1]+1, dp[i-1][j]+1),dp[i][j-1]+1);
					// replace c by d; 
					// delete c: then it is from (i-1, j) to same string plus a delete action, then we find the minimum match between i-1=d to j  
					// add d after c: then it is from (i, j-1) to same string, since the jth positon in word2 is d already 
				}
			}
		}
		return dp[word1.length()][word2.length()];
	}
}