public class Subset{

	// Subset 1 
	/**
	 *	Given a set of DISTINCT integers, nums, return all possible subsets
	 	
	 	add [] to the result first, and then add new element to the previous result, 
	 	similar to dynamic programming 

	 */
	public List<List<Integer>> subsets(int[] nums){
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		result.add(new ArrayList<Integer>()); // add empty set in the list of list 

		for(int n : nums){
			List<List<Integer>> tempHolder = new ArrayList<List<Integer>>(result);
			for(List<Integer> list : tempHolder){
				List<Integer> temp = new ArrayList<Integer>(list);
				temp.add(n);
				tempHolder.add(temp);
			}
			result.addAll(tempHolder);
		}
		return result;
	}

	// Subset 2 
	/**
	 *	Given a set of numbers that may contain duplicates, return all possible subsets
	 *
	 *	Deal with duplicates, after remove, for certain position, skip duplicates, 
	 *	** Difference between subset problem and combination: instead of check for certain restriction, 
	 *	you put the sublist to final result every time you do the recursion 
	 *
	 */

	 public List<List<Integer>> subset2( int[] nums ){
	 	List<List<Integer>> result = new ArrayList<List<Integer>>();
	 	backtrack(nums, result, new ArrayList<Integer>(), 0);
	 	return result;
	 }

	 private void backtrack( int[] nums, List<List<Integer>> result, List<Integer> subRes, int startIdx){
	 	result.add(new ArrayList<Integer>(subRes));
	 	for(int i=startIdx; i<nums.length;){
	 		subRes.add(nums[i]);
	 		backtrack(nums, result, subRes, i+1);
	 		subRes.remove(subRes.length-1);
	 		i++;
	 		// skip the duplicates
	 		while(i<nums.length && nums[i-1]==nums[i]){
	 			i++;
	 		}
	 	}
	 	return;
	 }
}