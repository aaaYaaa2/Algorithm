public class Solution {
	public boolean isMatch(String s, String p){
		boolean[][] dp = new boolean[s.length()+1][s.length()+1];
		dp[0][0] = true;
		for(int i=1; i<=p.length(); i++){
			if(i-2>=0 && dp[0][i-2]&& p.charAt(i-1)=='*'){
				dp[0][i]=true;
			}
		}
		for(int i=1; i<=s.length(); i++){
			for(int j=1; j<=p.length(); j++){
				if(dp[i-1][j]){
					if(p.charAt(j-1)=='.' || (i-2>=0 && s.charAt(i-1)==s.charAt(i-2) && p.charAt(j-1)=='*')) dp[i][j]=true;
				}else if(dp[i-1][j-1]){
					if(p.charAt(j-1)==s.charAt(i-1) || p.charAt(j-1)=='.') dp[i][j] = true;
				}else if(dp[i][j-1]){
					if(p.charAt(j-1)=='*' && j>=2 && s.charAt(i-1)==p.charAt(j-2)) dp[i][j]=true;
				}else if(j-2>=0 && dp[i][j-2]){
					if(p.charAt(j-1)=='*') dp[i][j] = true;
				}
			}
		}
		return dp[s.length()+1][p.length()+1];
	}
}

if(dp[i-1][j-1]){
	if(p.charAt(j-1)==s.charAt(i-1) || p.charAt(j-1)=='.') dp[i][j]=true;
}else if(dp[i-1][j] || dp[i][j-1] || dp[i][j-2]){
	if(p.charAt(j-2)==s.charAt(i-1) || p.charAt(j-2)=='.') dp[i][j]=true;
	else if()
}