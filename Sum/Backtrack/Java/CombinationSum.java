public class Solution {
	/** 
	 * Combination Sum 3, give the number of digits and the their sum. 
	 */
	// no need to consider the duplicate of candidate 
	public List<List<Integer>> combinationSum3(int k, int n){
		List<List<Integer>> ans = new ArrayList<List<Integer>>();
		backtrack1(ans, new ArrayList<Integer>(), k, 1, n);
		return ans;
	}
	private void backtrack1(List<List<Integer>> res, List<Integer> subCom, int k, int start, int n){
		if(subCom.size()==k && n==0){
			List<Integer> li = new ArrayList<Integer>(subCom);
			res.add(li);
			return; 
		}
		for(int i=start; i<=9; i++){
			subCom.add(i);
			backtrack(res, subCom, k, i+1, n-i);
			subCom.remove(subComb.size()-1);
		}
	}


	/** 
	 *	Combination Sum 2, Given a collection of candidate numbers and a target, 
	 *  find all unique combinations in C where the candidate numbers sums to T.
	 *  Each Number in C may only be used once.
	 *  
	 *  No number of number restriction.  
	 */

	// you need to consider the situation where there are duplicate candidate 
	public List<List<Integer>> combinationSum2 (int[] candidate, int target){
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		Arrays.sort(candidate);
		if(candidate.length==0) return result;
		backtrack2(result, new ArrayList<Integer>(), candidate, target, 0);
	}

	private void backtrack2 (List<List<Integer>> res, List<Integer> subCom, int[] candidate, int target, int start){
		if(target==0){
			res.add(new ArrayList<Integer>(subCom));
			return;
		}
		if(target<0) return;
		for(int i=start; i<candidate.length; i++){
			if(i>start && candidates[i-1]==candidates[i]) continue;
			// make sure the same place will not have duplicate number 
			subCom.add(candidate[i]);
			backtrack(res, subCom, candidate, target-candidate[i], i+1);
			subCom.remove(subCom.length-1);
		}
	}

	/**
	 *	Combination Sum: Given a set of candidate numbers C and a target number T, 
	 *	find all unique combinations in C where the candidate numbers 
	 *	sums to T. 
	 *	
	 *	The same repeated number may be chosen from C unlimited number of times 
	 *
	 */

	public List<List<Integer>> combinationSum1( int[] candidates, int target){
		Arrays.sort(candidates);
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		backtrack3(result, candidates, target, 0, new ArrayList<Integer>());
		return result;
	}

	private void backtrack3 (List<List<Integer>> res, int[] candidate, int target, int index, List<Integer> list){
		if(target==0) {
			res.add(new ArrayList(list));
			return;
		}
		if(target<0) return;
		for(int i=index; i<candidate.length; i++){
			list.add(candidate[i]);
			// compare the question that do 
			backtrack(res, candidate, target-candidate[i], i, list);
			list.remove(list.size()-1);
		}
	}
}