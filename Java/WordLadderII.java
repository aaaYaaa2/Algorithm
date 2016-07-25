public class WordLadderII {
	public List<List<String>> findLadders(String beginWord, String endWord, Set<String> wordList){
		List<List<String>> finalRes = new ArrayList<>();
		// map to record all the neighbours, i.e graph 
		Map<String, List<String>> neighbours = new HashMap<String, List<String>>();
		// map to record least distance from startword 
		Map<String, Integer> distance = new HashMap<String, Integer>();
		bfs(neighbours, distance, beginWord, endWord, wordList);
		dfs(finalRes, new ArrayList<String>(), distance, neighbours, beginWord, endWord);
		return finalRes;
	}
	// BFS to trace shortest distance from start and also build the neighbour map 
	private void bfs (Map<String, List<String>> neighbour, Map<String, Integer> distance, String beginWord, String endWord, Set<String> wordList){
		distance.put(beginWord, 0);
		for(String str : dict){
			neighbour.put(str, new ArrayList<String>());
		}
		Queue<String> nextLevel = new LinkedList<String>();
		nextLevel.offer(beginWord);
		wordList.add(endWord);
		int curDis = 0;
		boolean reachEnd = false;
		while(!nextLevel.isEmpty()){
			String word = nextLevel.poll();
			List<String> tmp = new ArrayList<String>(getNeighours(word, wordList));
			int num = tmp.size();
			for(String s : tmp){
				neighbour.get(word).add(s);
				if(!distance.containsKey(word)) {
					// on when it is not visited before we add it, since we need to have minimum steps 
					distance.put(word, curDis+1);
					if(!endWord.equals(s)) nextLevel.offer(s);
				}
			}
			curDis++;
		}
	}
	// method for checking if this two string are only different by one character 
	private List<String> getNeighours(String target, Set<String> wordList){
		List<String> rs = new ArrayList<String>();
		for(String wd : wordList){
			int count = 0;
			for(int i=0; i<target.length(); i++){
				if(target.charAt(i)!=wd.charAt(i)) count++;
			}
			if(count==1) rs.add(wd);
		}
		return rs;
	}

	// DFS to find all the solutions and put them into the result 
	private void dfs(List<List<String>> finalRes, List<String> subRes, 
		Map<String, Integer> distance, Map<String, List<String>> neighbours, String curWord, String endWord){
		if(curWord.equals(endWord)){
			finalRes.add(new ArrayList<String>(subRes));
			return;
		}
		for(String str : neighbours.get(curWord)){
			// only when it is the shortest distance, then we add the new word to the final result; 
			if(distance.get(str)==distance.get(curWord)+1){
				subRes.add(str);
				dfs(finalRes, subRes, distance, neighbours, str, endWord);
				subRes.remove(str);
			}
		}
	}
}

public class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, Set<String> wordList) {
        List<List<String>> finalRes = new ArrayList<>();
		// map to record all the neighbours, i.e graph 
		Map<String, List<String>> neighbours = new HashMap<String, List<String>>();
		// map to record least distance from startword 
		Map<String, Integer> distance = new HashMap<String, Integer>();
		bfs(neighbours, distance, beginWord, endWord, wordList);
		dfs(finalRes, new ArrayList<String>(), distance, neighbours, beginWord, endWord);
		return finalRes;
    }
    
    // BFS to trace shortest distance from start and also build the neighbour map 
	private void bfs (Map<String, List<String>> neighbour, Map<String, Integer> distance, String beginWord, String endWord, Set<String> wordList){
		distance.put(beginWord, 0);
		Queue<String> nextLevel = new LinkedList<String>();
		nextLevel.offer(beginWord);
		wordList.add(endWord);
		int curDis = 0;
		boolean reachEnd = false;
		while(!nextLevel.isEmpty()){
		    String word = nextLevel.poll();
			List<String> tmp = new ArrayList<String>(getNeighours(word, wordList));
			int num = tmp.size();
			for(String s : tmp){
				if(!neighbour.containsKey(word)) neighbour.put(word, tmp);
				if(!distance.containsKey(word)) distance.put(word, curDis+1);
				if(!endWord.equals(s)) nextLevel.offer(s);
			}
			curDis++;
		}
	}
	// method for checking if this two string are only different by one character 
	private List<String> getNeighours(String target, Set<String> wordList){
		List<String> rs = new ArrayList<String>();
		for(String wd : wordList){
			int count = 0;
			for(int i=0; i<target.length(); i++){
				if(target.charAt(i)!=wd.charAt(i)) count++;
			}
			if(count==1) rs.add(wd);
		}
		return rs;
	}

	// DFS to find all the solutions and put them into the result 
	private void dfs(List<List<String>> finalRes, List<String> subRes, 
		Map<String, Integer> distance, Map<String, List<String>> neighbours, String curWord, String endWord){
		if(curWord.equals(endWord)){
			finalRes.add(new ArrayList<String>(subRes));
			return;
		}
		for(String str : neighbours.get(curWord)){
			// only when it is the shortest distance, then we add the new word to the final result; 
			if(distance.get(str)==distance.get(curWord)+1){
			    subRes.add(curWord);
				dfs(finalRes, subRes, distance, neighbours, str, endWord);
				subRes.remove(subRes.size()-1);
			}
		}
	}
}