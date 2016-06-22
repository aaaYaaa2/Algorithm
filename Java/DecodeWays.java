// Decode Ways: A message containing letters from A-Z is being encoded to numbers using the mapping. 
public class Solution {
    public int numDecodings(String s) {
        if(s==null || s.length()==0) return 0;
        int n = s.length();
        int[] dp = new int[n+1];
        dp[n]=1;
        for(int i=n-1; i>=0; i--){
            // start from the end
            // need to consider the '0' condition 
            // 0 will divide the sequence into two parts, and 0 only depends on the number before it. 
            // start from the back will be more convenient to control the 0 condition. 
            if(s.charAt(i)=='0'){
                dp[i]=0;
                continue;
            }
            dp[i]=dp[i+1];
            if(i<s.length()-1 && (s.charAt(i)=='1' || (s.charAt(i)=='2' && s.charAt(i+1)<'7'))){
                dp[i]+=dp[i+2];
            }
        }
        return dp[0];
    }
}