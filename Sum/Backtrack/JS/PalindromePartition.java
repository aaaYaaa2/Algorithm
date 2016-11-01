public class PalindromePartition{
	public static List<List<String>> partition(String s){
		int len = s.length();
		List<List<String>>[] result = new ArrayList<List<String>>();
		result[0] = new ArrayList<List<String>>();
		result[0].add( new ArrayList<String>());

		boolean[][] pair = new boolean[len][len];
		for(int i=0; i<s.length(); i++){
			result[i+1] = new ArrayList<List<String>>();
			for(int left = 0; left<=i; left++){
				if(s.charAt(left)==s.charAt(i) && (left == i || s.charAt(left+1) == s.charAt(i-1))){
					String tmp = s.subtring(left, i+1);
					pair[left][i] = true;
					for(List<String> list : result[left]){
						List<String> clone = new ArrayList<String>(list);
						clone.add(tmp);
						result[i+1].add(clone);
					}
				}
			}
		}
		return result[len];
	}
}