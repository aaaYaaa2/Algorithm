public class Solution {
	// sort first
	// O(NlgN) running time and O(1) memory 
	public int findKthLargest(int[] nums, int k){
	 	final int N = nums.length;
	 	Arrays.sort(nums);
	 	return nums[N-k];
	}

	// use a priority queue to store K-th largest value 
	public int findKthLargest(int[] nums, int k) {
		final PriorityQueue<Integer> pq = new PriorityQueue<>();
		for(int val : nums){
			pq.offer(val);
			if(pq.size()>k) {
				pq.poll();
			}
		}
		return pq.peek();
	}

	// use the selection algorithm 
	public int findKthLargest(int[] nums, int k) {
		k = nums.length - k;
		int lo = 0;
		int hi = nums.length - 1;
		while(lo<hi) {
			final int j = partition(num, lo, hi);
			if(j<k) {
				lo = j+1;
			}else if(j>k) {
				hi = j-1;
			}else{
				break;
			}
		}
		return nums[k];
	}

	private int partition(int[] a, int lo, int hi) {
		int i = lo;
		int j = hi + 1;
		while(true){
			while(i<hi && less(a[++i], a[lo])); // find a[i] smaller than a[lo]
			while(j>lo && less(a[lo], a[--j])); // find a[j] larger than a[lo]
			if(i>=j){ break; }
			exch(a, i, j);
		}
		exch(a, lo, j);
		return j;
	}

	private void exch(int[] a, int i, int j) {
		final int tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}

	private boolean less(int v, int w) {
		return v<w;
	}

	// if we want a O(N) guanranteed running time + O(1), we can shuffle the input array first
	public int findKthLargest(int[] nums, int k){
		shuffle(nums);
		k = nums.length - k;
		int lo = 0;
		int hi = nums.length-1;
		while(lo<hi){
			final int j=partition(nums, lo, hi);
			if(j < k) {
                lo = j + 1;
            } else if (j > k) {
                hi = j - 1;
            } else {
                break;
            }
		}
		return nums[k];
	}

	private void shuffle(int a[]) {
		final Random random = new Random();
		for(int ind=1; ind<a.length; ind++){
			final int r = random.nextInt(ind + 1);
			exch(a, ind, r);
		}
	}
}