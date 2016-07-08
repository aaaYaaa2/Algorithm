// 07/05/16 
/**
 *  Be careful that the input string could be EMPTY STRING !!!
 */
public class PalindromePairs {
	// a naive implementation, 
	// will cause time limit exceeds problem 
	// Time complexity O(N^2)
	// when you want to reverse a string, you can do, 

	// String rev = new StringBuilder(str).reverse().toString();

	public List<List<Integer>> palindromePairs(String[] words){
		List<List<Integer>> result = new ArrayList<>();
		// check if the array is empty or only contain one word 
		if(words==null || words.length<=1) return result;

		for(int i=0; i<words.length; i++){
			String firstwd = words[i];
			for(int j=i+1; j<words.length; j++){
				String secondwd = words[j];
				if(isPalindrome(firstwd, secondwd)){
					List<Integer> pair1 = new ArrayList<>();
					pair1.add(i); pair1.add(j);
					result.add(pair1);
				}
				if(isPalindrome(secondwd, firstwd)){
					List<Integer> pair2 = new ArrayList<>();
					pair2.add(j); pair2.add(i);
					result.add(pair2);
				}
			}
		}
		return result;
	}

	private boolean isPalindrome(String word1, String word2){
		// if the start and end not meet then we skip the whole check 
		if(word1.length()>0 && word2.length()>0 && word1.charAt(0)!= word2.charAt(word2.length()-1)) return false;
		// combine the two string 
		String com = word1 + word2;
		for(int frt=0, end=com.length()-1; frt<end; frt++, end--){
			if(com.charAt(frt)!=com.charAt(end)) return false;
		}
		return true;
	}

	// HashTable implementation, Seperate the string into left and right part  
	/**
		1. Put all the string in a hashtable
		2. use a boolean array to keep track of all the check entry in original array 
		3. traverse through the array, for each word, check the if right part is a palindrom, 
			if it is, check reverse of the left part is in the table and untouched part, then check the reverse order. 

		Time Complexity: O(N) 

		4. j<=word[i].length(); 
	 *
	 */

	public List<List<Integer>> palindromPairs2(String[] words){
		List<List<Integer>> result = new ArrayList<>();
		if(words==null || words.length==0) return result;

		Map<String, List<Integer>> map = new HashMap<String, List<Integer>>();
		boolean visited = new boolean[words.length];
		// build the map 
		for(int i=0; i<words.length; i++){
			if(!map.containsKey(words[i])){
				map.put(words[i], new ArrayList<Integer>());
			}
			map.get(words[i]).add(i);
		}

		for(int j=0; j<words.length; j++){
			int wordLen = words[j].length();
			// if the word is empty then we skip 
			if(wordLen==0) continue;
			// left check 
			for(int k=0; k<wordLen; k++){
				String left = words[j].substring(0,k);
				if(isPalindrome(left)){
					String rest = words[j].substring(k, wordLen-1);
					rest = reverse(rest);
					if(map.containsKey(rest)){
						List<Integer> sub = new ArrayList<>();
						sub.add(k); sub.add(k);
						for(int idx : map.get(rest)){
							if(idx>k){
								sub.set(1, idx);
								result.add(new ArrayList<Intger>(sub));
							}
						}
					}
				}
			}

			// right check 
			for(int c=wordLen-1; c>=0; c--){
				String right = words[j].substring(c,wordLen-1);
				if(isPalindrome(right)){
					String rest2 = words[j].substring(0,c);
					rest2 = reverse(rest2);
					if(map.containsKey(rest2)){
						List<Integer> sub = new ArrayList<>();
						sub.add(k); sub.add(k);
						for(int idx : map.get(rest2)){
							if(idx>k){
								sub.set(1, idx);
								result.add(new ArrayList<Integer>(sub));
							}
						}
					}
				}
			}
			// if the word is palindrom it self 
			// if it is, then we append "" to it 
			if(isPalindrome(word[j])){
				if(map.containsKey("")){
					List<Integer> temp = new ArrayList<>();
					temp.add(j);temp.add(j);
					for(int h : map.get("")){
						if(h<j) temp.set(1,h);
						result.add(temp);
					}
				}
			}
		}
	}

	private boolean isPalindrome(String input){
		for(int frt=0, end=input.length()-1; frt<=end; frt++, end--){
			if(input.charAt(frt)!=input.charAt(end)) return false;
		}
		return true;
	}

	// optimize the solution above 
	public List<List<Integer>> palindromePairs3(String[] words){
		List<List<Integer>> result = new ArrayList<>();
		if( words==null || words.length<2) return result;
		// build the map 
		int arrayLen = words.length;
		Map<String, Integer> map = new HashMap<>();
		for(int cnt=0; cnt<arrayLen; cnt++) map.put(words[cnt], cnt);
		// check begin 
		for(int i=0; i<arrayLen; i++){
			for(int j=0; j<=words[i].length(); j++){ // there should be j<=words[i].length() to consider empty string 
				String first = words[i].substring(0,j);
				String second = words[i].substring(j);
				checkPalindrome(result, first, second, i, map);
			}
		}
		return result;
	}
	private void checkPalindrome(List<List<Integer>> res, String str1, String str2, int i, Map<String, Integer> map){
		if(isPalindrome(str1)){
			String rev2 = new StringBuilder(str2).reverse().toString();
			if(map.containsKey(rev2) && map.get(rev2)!=i){
				List<Integer> sub1 = new ArrayList<>();
				sub1.add(map.get(rev2)); sub.add(i);
				res.add(sub1);
			}
		}
		if(isPalindrome(str2)){
			String rev1 = new StringBuilder(str1).reverse().toString();
			if(map.containsKey(rev1) && map.get(rev1)!=i && str2.length()!=0){
				// since in the first check we include ""+word condition, 
				// so we skip the condition of word + "" check right now, 
				// since the reverse of "" is itself !!!!!
				List<Integer> sub2 = new ArrayList<>();
				sub2.add(i); sub2.add(map.get(rev1));
				res.add(sub2);
			}
		}
	}
}