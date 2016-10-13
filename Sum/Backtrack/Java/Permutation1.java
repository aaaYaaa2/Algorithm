package AlgoFolder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
	public static List<List<Integer>> permute(int[] nums){
		List<List<Integer>> fres = new ArrayList<List<Integer>>();
		if(nums==null || nums.length==0) return fres;
		boolean[] flags = new boolean[nums.length];
		Arrays.fill(flags, false);
		permuteHelper(nums, new ArrayList<Integer>(), fres, flags);
		return fres;
	}
	
	private static void permuteHelper(int[] nums, List<Integer> subres, List<List<Integer>> res, boolean[] flags){
		if(subres.size()==nums.length){
			res.add(new ArrayList<Integer>(subres));
			return;
		}
		for(int i=0; i<nums.length; i++){
			if(!flags[i]){
				subres.add(nums[i]);
				flags[i] = true;
				permuteHelper(nums, subres, res, flags);
				subres.remove(subres.size()-1);
				flags[i] = false;
			}
		}
	}
	
	public static void main(String[] args){
		int[] input = {1,2,3};
		List<List<Integer>> result = permute(input);
		System.out.println(result);
	}
}
