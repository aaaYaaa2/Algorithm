public class InterleavingString{
	public boolean isInterleave(String s1, Stirng s2, String s3){
		if( s1==null || s1.length()==0 || s2==null || s2.length()==0 || s1.length()+s2.length()!=s3.length()){
			return false;
		}
		int i=0, j=0;
		for(int k=0; k<s3.length(); k++){
			char cur = s3.charAt(k);
			if((i==0 || j==0) && (s3.substring(k, k+s1.length())==s1 || s3.substring(k, k+s2.length())==s2)){
				return false;
			}
			if(cur==s1.charAt(i)){
				i++;
			}else if(cur==s2.charAt(j)){
				j++;
			}else{
				return false;
			}
		}
		return true;
	}

	// Dynamic programming solution 
	// check[i][j] represent the string interleave at s1[i] and s2[j]; 
	// if i=0 then we can only go to this place from (i, j-1), then if we check s2[j]==s3[i+j-1] && check[i][j-1],
	// similar for j = 0;
	// if both j and i are not zero, then we need to check two condition 
	// we could come to this place from check[i-1][j] then we need to check (i-1, j) && s1.charAt(i-1)==s2.charAt(i+j-1)
	// we could come to this place from check[i][j-1] then we need to check (i, j-1) && s1.charAt(j)==s2.charAt(i+j-1)
	// since index in java start at 0 then we need an extra row and extra column 

	public boolean isInterleave2(String s1, String s2, String s3){
		if(s3.length()!=s1.length()+s2.length()) return false;
		boolean[][] check = new boolean[s1.length()+1][s2.length()+1];
		for(int i=0; i<s1.length()+1; i++){
			for(int j=0; j<s2.length()+1; j++){
				if(i==0 && j==0) {
					check[i][j]=true;
				}else if(i==0){
					check[i][j] = check[i][j-1] && s2.charAt(j-1)==s3.charAt(i+j-1);
				}else if(j==0){
					check[i][j] = check[i-1][j] && s1.charAt(i-1)==s3.charAt(i+j-1);
				}else{
					check[i][j] = (check[i-1][j] && s1.charAt(i-1)==s3.charAt(i+j-1)) || 
								  (check[i][j-1] && s2.charAt(j-1)==s3.charAt(i+j-1));
				}
			}
		}
		return check[s1.length()][s2.length()];
	}
}