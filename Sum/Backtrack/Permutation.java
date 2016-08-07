public class Permutation {
	// Permutation 1 Solution

	/** 
	 *	Given a collection of distinct numbers, return all possible permutations. 
	 */
	public List<List<Integer>> permute(int[] nums){
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		if(nums.length==0) return result;
		backtrack1(result, new ArrayList<Integer>(), 0, nums);
		return result;
	}
	private void backtrack1( List<List<Integer>> result, List<Integer> subRes, int index, int[] nums){
		if(subRes.size() == nums.length){
			result.add(subRes);
			return;
		}
		int n = nums[index], size = subRes.size();
		for(int i=0; i<=size; i++){
			List<Integer> newList = new ArrayList<Integer>(subRes);
			newList.add(i,n);
			backtrack1(result, newList, index+1, nums);
		}
	}

	/**
	 *	Given a collection of numbers that might contain duplicates return all possible permutaiton 
	 */
	public List<List<Integer>> permute2(int[] nums){
		List<List<Integer>> result = new ArrayList<List<Integer>>();
		if(nums==null || nums.length==0) return result;
		Arrays.sort(nums);
		boolean visited = new boolean[nums.length];
		backtrack2(result, new ArrayList<Integer>(), nums, visited);
		return result;
	}

	private void backtrack2( List<List<Integer>> result, List<Integer> subRes, int[] nums, boolean[] visited){
		if(subRes.size()==nums.length){
			result.add(new ArrayList<Integer>(subRes));
			return;
		}
		for(int i=0; i<nums.length; i++){
			if(visited[i]) continue;
			// dealing with situation where there are duplicates 
			if(i!=0 && nums[i-1]==nums[i] && !visited[i-1]) continue;
			subRes.add(nums[i]);
			visited[i] = true;
			backtrack2(result, subRes, nums, visited);
			visited[i] = false;
			subRes.remove(nums.length-1);
		}
	}

	/**
	 *	Combination Sum III 
	 *	Find all possible combinations of k numbers that add up to 
	 */


}