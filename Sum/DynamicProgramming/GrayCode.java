public class GrayCode {
	public List<Integer> grayCode(int n){
		List<Integer> res = new ArrayList<Integer>();
		res.add(0);
		int size;
		for(int i=0; i<n; i++){
			size = res.length-1;
			for(int j=size; j>=0; j--){
				res.add(res.get(j) | 1<<i);
			}
		}
		return res;
	}
}