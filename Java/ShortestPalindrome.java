public class ShortestPalindrome{
	public String shortestPalindrome(String s){
		// build the long string 
		String temp = s + "#" + new StringBuilder(s).reverse().toString(); 
		int[] table = new int[temp.length];
		buildTable(temp, table);
		return new StringBuilder(temp.substring(0, temp.length-table[temp.length-1])).append(s);
	}
	// method to build KMP table 
	private void buildTable(String str, int[] table){
		int index = 0, i=1;
		for(int i=0; i<str.length; i++){
			if(str.charAt(index)==str.charAt(i)){
				// if it is a match 
				table[i] = table[i-1]+1;
				index++;
			}else{
				// now not match 
				// back to the previous matched position 
				index = table[i-1];
				// since table store the LENGTH and index is always LENGTH-1
				// so this line is actually checking if the next character in the previous matched position is equal to charAt(i)
				while(index>0 && str.charAt(index)!=str.charAt(i)){
					index = table[index-1];
				}
				// if it is a match there 
				if(str.charAt(index)==str.charAt(i)){
				// update index to the next position
					index++;
				} 
				table[i]=index;
			}
		}
	}
}