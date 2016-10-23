ArrayList<LinkedList<Integer>> allSequence(TreeNode node){
	ArrayList<LinkedList<Integer>> result = new ArrayList<LinkedList<Integer>>();

	if(node==null){
		result.add(new LinkedList<Integer>());
		return result;
	}

	LinkedList<Integer> prefix = new LinkedList<Integer>();
	prefix.add(node.data);

	// Recurse on left and right subtrees
	ArrayList<LinkedList<Integer>> leftSeq = allSequence(node.left)
	ArrayList<LinkedList<Integer>> rightSeq = allSequence(node.right);

	for(LinkedList<Integer> left : leftSeq){
		for(LinkedList<Integer> right : rightSeq){
			ArrayList<LinkedList<Integer>> weaved = new ArrayList<LinkedList<Integer>>();
			weaveList(left, right, weaved, prefix);
			result.addAll(weaved);
		}
	}
	return result;
}

// weaved things together in all possible ways 
// remove head from one list, recursing and then doing the same thing with the other

void weavedLists(LinkedList<Integer> first, LinkedList<Integer> second, ArrayList<LinkedList<Integer>> result, LinkedList<Integer> prefix){
	// One list is empty, Add remainder to [a clone] prefix and store result 
	if(first.size() == 0 || second.size() == 0){
		LinkedList<Integer> result = (LinkedList<Integer>)prefix.clone();
		result.addAll(first);
		result.addAll(second);
		results.add(result);
		return;
	}

	// recurse with head of first added to the prefix. Removing the head will 

	int headFirst = first.removeFirst();
	prefix.addLast(headFirst);
	weaveList(first, second, results, prefix);
	prefix.removeLast();
	first.addFirst(headFirst);

	// Do the same thing with second 
	int headSecond = second.removeFirst();
	prefix.addLast(headSecond);
	weaveList(first, second, results, prefix);
	prefix.removeList();
	second.addFirst(headSecond);
}