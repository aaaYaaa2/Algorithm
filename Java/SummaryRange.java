public class SummaryRanges {
	/**
		Use TreeMap to easily find the lower and higher key, the time complexity of 
		TreeMap methods are lowerKey(), higherKey(), put() and remove() method is O(logN).  
		there are four cases:
		1. both lower and higher key exists and the new number just fill the gap between lower 
		   interval and higher interval;
		2. lower key exist and the val could be within the interval or just after the end 
		3. higher key exist and the key just after one of the val
		4. it is an independent number 
	*/
	public class Interval {
		int start;
		int end;
		Interval(){ start=0; end=0;}
		Interval(int s, int e) { start=s; end=e;}
	}

	public class SummaryRanges {
		/** Initialize your data structure here.*/
		TreeMap<Integer, Inteval> tree;
		public SummaryRanges(){
			tree = new TreeMap<Integer, Interval>();
		}

		public void addNum(int val){
			if(tree.containsKey(val)) return;
			// get the keys closely related to the key val 
				Integer h = tree.higherKey(val);
				Integer l = tree.lowerKey(val);
				if( l!=null && h!=null && tree.get(l).end+1==val && h == val+1){
					tree.get(l).end = tree.get(h).end;
					tree.remove(h);
					// merge two interval into one when the new number fill the 
					// gap between them 
				}else if(l!=null && tree.get(l).end+1>=val){
					tree.get(l).end = Math.max(tree.get(l).end, val);
				// if the new number just fit the end of one interval 
				}else if(h!=null && h == val+1){
					// if the number fit the start of one interval 
					tree.put(val, new Interval(val, tree.get(h).end));
					tree.remove(h);
				}else{
					tree.put(val, new Interval(val, val));
				}
		}

		public List<Interval> getIntervals(){
			return new ArrayList<>(tree.values());
		}
	}
}