public class SubstringWithConcatenationOfAllWords{
	public List<Integer> findSubstring(String s, String[] words){
		List<Integer> result = new ArrayList<>();
		if(L.length==0 || L[0].isEmpty()||L[0].length()>S.length())
			return result;

		Map<String, Integer> map = new HashMap<String, Integer>();
		for(String str : words){
			if(map.containsKey(str)){
				map.put(str, map.get(str)+1);
			}else{
				map.put(str, 1);
			}
		}// build the map, since there maybe duplicates of words, we use map 

		// build the window then check for the whole window 
		int wdLen = words[0].length();
		for(int i=0; i+wdLen*L.length<=S.length(); i++){
			if(map.containsKey(S.substring(i, i+size))){
				Map<String, Integer> copy = new HashMap<>(map);
				for(int j=0; j<L.length; j++){
					String word = S.subtring(i+j*wdLen, i+(j+1)*wdLen);
					copy.put(word, !copy.containsKey(word)? 1 : copy.get(word)+1);
				}
				if(copu.equals(map)) result.add(i);
			}
		}
		return result;
	}
}