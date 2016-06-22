 class SegmentTree{
	int st[]; // array stores segment tree nodes 

	// constructor 
	SegmentTree(int arr[], int n){
		// height of the segment tree
		int x = (int)(Math.ceil(Math.log(n)/Math.log(2)));
		// Maximum size of segment tree 
		int maxSize = 2*(int)Math.pow(2, x) - 1;

		st = new int[maxSize]; // Memory Allocation 
		contructSTUtil(arr, 0, n-1, 0);
	}

	// A utility function to get the middle index form corner indexes. 
	int getMid(int s, int e){
		return s+(e-s)/2;
	}
	// recursive function that constructs Segment Tree for array [ss..se].
	// si is index of current node in segment tree st 
	int contructSTUtil(int arr[], int ss, int se, int si){
		if(ss == se){
			st[si] = arr[ss];
			return arr[ss];
		}
		// if there are more than one elements, then recur for left and right 
		// subtree and store the sum of values in this node 
		// every time divided the array into half 
		
		int mid = getMid(ss, se);
		st[si] = constructSTUtil(arr, ss, mid, si*2+1) + 
				 constructSTUtil(arr, mid+1, se, si*2+2);
				 // left sum tree range from ss to mid, and root is in index si*2+1 in the segment tree 
		return st[si];
	}

	// recursive function to get the sum of values in given range of the array 
	// st ----> Pointer to segment tree
	// si ----> Index of current node in the segment tree. 
	// ss & se ----> Starting and ending indexes of the segment represented 
	//				 by current node. i.e st[si]
	// qs & qe ----> Starting and ending indexes of query range 
	int getSumUtil(int ss, int se, int qs, int qe, int si){
		// if segment of this node is a part of given range 
		if(qs<=ss && qe >= se){
			return st[si];
		}
		// if segment of this node is outside the given range 
		if(se<qs || ss>qe){
			return 0; 
		}
		// if a part of this segment overlaps with the given range
		int mid = getMid(ss, se);
		return getSumUtil(ss, mid, qs, qe, 2*si+1) + 
			   getSumUtil(mid+1, se, qs, qe, 2*si+2);
	}

	// i ----> index of the element to be updated, This index is in input array 
	// diff ---> value to be added to all nodes which have i in range 
	void updateValueUtil(int ss, int se, int i, int diff, int si){
		// Base case: If the input index lies outside the range of this segment 
		// this segment 
		if(i<ss || i>se) return;
		// If the input index is in range of this node, then update the value 
		// of the node and its children 
		st[si] = st[si] + diff;
		if(se!=ss){
			int mid = getMid(ss, se);
			updateValueUtil(ss, mid, i, diff, 2*si+1);
			updateValueUtil(mid+1, se, i, diff, 2*si+2);
		}
	}

	// function to update a value in input array and segment tree.
	// It uses updateValueUtil() to update the value in segment tree
	void updateValue(int arr[], int n, int i, int new_val){
		// Check for erroneous input index 
		if(i<0 || i>n-1){
			System.out.println("Invalid Input");
			return;
		}

		// Get the difference bewteen new value and old value
		int diff = new_val - arr[i];

		// Update the value in array 
		arr[i] = new_val;

		// Update the values of nodes insegment tree
		updateValueUtil(0, n-1, i, diff, 0);
	}

	// Return sum of elements in range from index qs (query start) to 
	// qe (query end). It mainly uses getSumUtil()
	int getSum(int n, int qs, int qe){
		// Check for erroneous input values 
		if(qs<0 || qe>n-1 || qs>qe){
			System.out.println("Invalid Input");
			return -1;
		}
		return getSumUtil(0, n-1, qs, qe, 0);
	}

	public static void main(String args[]){
		int arr[] = {1,3,5,7,9,11};
		int n = arr.length;
		SegmentTree tree = new SegmentTree(arr, n);

		// Build segment tree from given array 
		// Print sum of values in array form index 1 to 3
		System.out.println("Sum of values in given range = " +
			tree.getSum(n, 1, 3));

		// Update: set arr[i] = 10 and update corresponding tree nodes 
		tree.updateValue(arr, n, 1, 10);

		// Find sum after the value is updated 
		System.out.println("Update sum of values in given rang =") + tree.getSum(n, 1, 3));
	}
}